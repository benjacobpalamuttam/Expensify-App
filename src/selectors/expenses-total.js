const expenseTotal = (expenses) => {
    const expenseAmounts = expenses.map((expense) => {
        if (expense) {
            return parseInt(expense.amount);
        }
    });
    const totalExpense = expenseAmounts.reduce((acc, cur) => acc + cur, 0);
    return totalExpense;
};

export default expenseTotal;