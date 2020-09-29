import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        focused: false,
        error: ''
    };

    componentDidMount() {
        if (this.props.defaultState) {
            this.setState(() => ({
                description: this.props.defaultState.description,
                note: this.props.defaultState.note,
                amount: this.props.defaultState.amount.toString(),
                createdAt: moment(this.props.defaultState.createdAt)
            }));
        }
    }

    changeDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    changeNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    changeAmount = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }

    };

    onSubmit = (e) => {
        e.preventDefault();
        let error = 'Please enter all the madatory fields to submit the form!';
        if (!this.state.amount || !this.state.description) {
            this.setState(() => ({ error }));
        } else {
            error = '';
            this.setState(() => ({ error }));
            this.props.onSubmit(({
                description: this.state.description,
                note: this.state.note,
                amount: this.state.amount,
                createdAt: this.state.createdAt.valueOf()
            }))
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type='text'
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.changeDescription}
                        autoFocus
                    />
                    <input
                        type='number'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.changeAmount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={createdAt => {
                            if (createdAt) {
                                this.setState({ createdAt })
                            }
                        }}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        id="myDate"
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        onChange={this.changeNote}
                        value={this.state.note}
                        placeholder='Enter notes (Optional)'
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}