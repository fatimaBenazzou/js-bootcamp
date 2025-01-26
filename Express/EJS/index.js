import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 5556;

//Midleware
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use("/public", express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// List of categories
const categories = ["Food", "Transportation", "Entertainment"];
let expenses = [
    {
        id: 1,
        description: "Groceries",
        amount: 3000,
        category: "Food",
        date: "2025-01-20",
    },
    {
        id: 2,
        description: "Gasoline",
        amount: 900,
        category: "Transportation",
        date: "2025-01-21",
    },
];

// Routes
app.get("/", (req, res) => {
    res.render("index", { expenses, categories });
});

// add exense
app.post("/add", (req, res) => {
    const { description, amount, category, date } = req.body;

    if (!description || !amount || !category || !date) {
        return res.status(400).send("Please fill all the inputs");
    }

    const newExpense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        category,
        date,
    };

    expenses.push(newExpense);
    res.redirect("/");
});

// filter by category
app.get("/filter", (req, res) => {
    const { category } = req.query;
    const filteredExpenses = category
        ? expenses.filter((expense) => expense.category === category)
        : expenses;
    res.render("index", { expenses: filteredExpenses, categories });
});

// edit page
app.get("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const expense = expenses.find((expense) => expense.id === id);
    if (!expense) res.status(400).send("Expense not found.");
    res.render("edit", { expense, categories });
});
app.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { description, amount, date, category } = req.body;
    const expense = expenses.find((expense) => expense.id === id);
    if (!expense) res.status(400).send("Expense not found.");

    expense.description = description;
    expense.amount = parseFloat(amount);
    expense.category = category;
    expense.date = date;

    res.redirect("/");
});

// delete
app.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    expenses = expenses.filter((expense) => expense.id !== id);
    res.redirect("/");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
