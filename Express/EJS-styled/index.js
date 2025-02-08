import "dotenv/config";

import express from "express";
import morgan from "morgan";
import Expense from "./models/Expense.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
mongoose.set("debug", true);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/public", express.static("./public"));

const categories = ["Food", "Transportation", "Entertainment"];
const path = "index";

// Route principale
app.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.render("layout", {
            expenses,
            categories,
            selectedCategory: null,
            path,
        });
    } catch (error) {
        res.status(500).send("Erreur lors de la récupération des dépenses");
    }
});

// Ajouter une dépense
app.post("/add", async (req, res) => {
    const { description, amount, category, date } = req.body;
    if (!description || !amount || !category || !date) {
        return res.status(400).send("Tous les champs doivent être remplis.");
    }

    try {
        const newExpense = new Expense({
            description,
            amount: parseFloat(amount),
            category,
            date: new Date(date),
        });

        await newExpense.save();
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Erreur lors de l'ajout de la dépense");
    }
});

// Page d'édition
app.route("/edit/:id")
    .get(async (req, res) => {
        try {
            const expense = await Expense.findById(req.params.id);
            if (!expense) {
                return res.status(404).send("Dépense non trouvée");
            }
            res.render("layout", { expense, categories, path: "edit" });
        } catch (error) {
            res.status(500).send("Erreur lors de la récupération de la dépense");
        }
    })
    .post(async (req, res) => {
        // Mettre à jour une dépense
        const { description, amount, category, date } = req.body;
        try {
            const expense = await Expense.findById(req.params.id);
            if (!expense) {
                return res.status(404).send("Dépense non trouvée");
            }

            expense.description = description;
            expense.amount = parseFloat(amount);
            expense.category = category;
            expense.date = new Date(date);

            await expense.save();
            res.redirect("/");
        } catch (error) {
            res.status(500).send("Erreur lors de la mise à jour de la dépense");
        }
    });

// Supprimer une dépense
app.post("/delete/:id", async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Erreur lors de la suppression de la dépense");
    }
});

app.get("/filter", async (req, res) => {
    const { category } = req.query;
    try {
        const filteredExpenses = category ? await Expense.find({ category }) : await Expense.find();
        res.render("layout", {
            expenses: filteredExpenses,
            categories,
            selectedCategory: category,
            path,
        });
    } catch (error) {
        res.status(500).send("Erreur lors du filtrage des dépenses");
    }
});

app.get("/report", async (req, res) => {
    const { month, year } = req.query;
    const selectedMonth = month || new Date().getMonth();
    const selectedYear = year || new Date().getFullYear();

    try {
        const summary = await getMonthlySummary(parseInt(selectedMonth), parseInt(selectedYear));
        res.render("layout", {
            summary,
            selectedMonth,
            selectedYear,
            path: "report",
        });
    } catch (error) {
        res.status(500).send("Erreur lors de la génération du rapport");
    }
});

// Fonction pour obtenir le résumé mensuel
async function getMonthlySummary(month, year) {
    const summary = {};

    try {
        const expenses = await Expense.find();
        expenses.forEach((expense) => {
            const expenseDate = new Date(expense.date);
            if (expenseDate.getMonth() === month && expenseDate.getFullYear() === year) {
                if (!summary[expense.category]) {
                    summary[expense.category] = 0;
                }
                summary[expense.category] += expense.amount;
            }
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des dépenses pour le résumé mensuel:", error);
    }

    return summary;
}

mongoose
    .connect(process.env.MONGODB_URI, {
        auth: {
            username: process.env.MONGODB_USERNAME,
            password: process.env.MONGODB_PASSWORD,
        },
        dbName: process.env.MONGODB_DBNAME,
    })
    .then(() => {
        console.log(`DB is connected ${process.env.MONGODB_DBNAME}`);

        app.listen(PORT, () => {
            console.log(`Server started on ${PORT}`);
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });
