import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <p>Edit expense with id {props.match.params.id}</p>
            <ExpenseForm onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }} defaultState={props.expense} />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }))
                props.history.push('/')
            }}>
                Remove
        </button>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    expense: state.expense.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);