import React from 'react';
import { connect } from 'react-redux';
import SelectedExpense from '../selectors/expenses';
import expenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpenseSummary = (props) => {
    const totalExpense = expenseTotal(props.expenses);
    const numberOfExpense = props.expenses.length;
    return (
        <h1>Viewing {numberOfExpense} expenses totaling {numeral(totalExpense).format('$0,0.0')}</h1>
    )
};

const mapStateToProps = (state) => (
    {
        expenses: SelectedExpense(state.expense, state.filter)
    }
);

export default connect(mapStateToProps)(ExpenseSummary);

