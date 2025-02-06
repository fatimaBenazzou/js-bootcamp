import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import Expense from "./models/Expense.js";

const app = express();
const PORT = process.env.PORT || 5556;

//Midleware
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use("/public", express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// List of categories
const categories = ["Food", "Transportation", "Entertainment"];

// Routes
app.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.render("index", { expenses, categories, selectedCategory: null });
    } catch (error) {
        res.status(500).send("Error loading expenses");
    }
});

// add exense
app.post("/add", async (req, res) => {
    const { description, amount, category, date } = req.body;

    if (!description || !amount || !category || !date) {
        return res.status(400).send("Please fill all the inputs");
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
        res.status(500).send("Error saving new expense");
    }
});

// filter by category
app.get("/filter", async (req, res) => {
    const { category } = req.query;
    try {
        const filteredExpenses = category ? await Expense.find({ category }) : await Expense.find();
        res.render("index", { expenses: filteredExpenses, categories, selectedCategory: category });
    } catch (error) {
        res.status(500).send("Error filtering expense");
    }
});

// edit page
app.route("/edit/:id")
    .get(async (req, res) => {
        const id = req.params.id;
        try {
            const expense = await Expense.findById(id);

            if (!expense) res.status(400).send("Expense not found.");
            res.render("edit", { expense, categories });
        } catch (error) {
            res.status(500).send("Error getting Expense");
        }
    })
    .post(async (req, res) => {
        const id = req.params.id;
        const { description, amount, date, category } = req.body;

        try {
            const expense = await Expense.findById(id);
            if (!expense) res.status(400).send("Expense not found.");

            expense.description = description;
            expense.amount = parseFloat(amount);
            expense.category = category;
            expense.date = new Date(date);

            await expense.save();
            res.redirect("/");
        } catch (error) {
            res.status(500).send("Error updating expense");
        }
    });

// delete
app.post("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await Expense.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error Deleting expense");
    }
});

app.get("/report", async (req, res) => {
    const { month, year } = req.query;
    const selectedMonth = month || new Date().getMonth();
    const selectedYear = year || new Date().getFullYear();

    try {
        const summary = await getMonthlySummary(parseInt(selectedMonth), parseInt(selectedYear));
        res.render("report", { summary, selectedMonth, selectedYear });
    } catch (error) {
        res.status(500).send("Error getting report");
    }
});

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
        console.error(error);
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
        console.log("DB connected !");

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(e);
        process.exit(-1);
    });
