function loadExpenses() {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
}

function saveExpenses(expenses) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense() {
    const description = prompt("Enter the description");
    const amount = parseFloat(prompt("Enter the amount"));
    const category = prompt("Enter the category");
    const date = prompt("Enter the date (YYYY-MM-DD))");

    if (!description || isNaN(amount) || !category || !date) {
        alert("Invalid input ! Try again.");
        return;
    }

    const expenses = loadExpenses();
    const newExpense = {
        description: description,
        amount: amount,
        category: category,
        date: date,
    };

    expenses.push(newExpense);
    saveExpenses(expenses);

    alert(`Expense Added: ${description}, ${amount}, ${category}, ${date}`);
}

function getTotalExpenses() {
    const expenses = loadExpenses();
    const total = expenses.reduce((total, expense) => total + expense.amount, 0);
    alert(`Total Expenses: $${total.toFixed(2)}`);
}
// addExpense();

function getExpensesByCategory() {
    const category = prompt("Enter the category");
    const expenses = loadExpenses();

    const filtered = expenses.filter(
        (expense) => expense.category.toLowerCase() === category.toLowerCase()
    );

    if (filtered.length === 0) {
        alert(`No Expenses found for category ${category}`);
    } else {
        var result = `Expenses in category "${category}" :\n `;

        filtered.forEach((expense) => {
            result += `- ${expense.description}: DZD ${expense.amount} `;
        });
        alert(result);
    }
}

function getMostExpensiveExpense() {
    const expenses = loadExpenses();

    const max = expenses.reduce((max, expense) => (expense.amount > max.amount ? expense : max));

    alert(`Most expensive expense: `);
}

console.log(getMostExpensiveExpense());
