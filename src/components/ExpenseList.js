import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import SelectedExpense from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateToProps = (state) => (
    {
        expenses: SelectedExpense(state.expense,state.filter)
    }
);

export default connect(mapStateToProps)(ExpenseList);