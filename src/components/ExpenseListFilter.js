import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {

    state = {
        focusedInput: null
    };

    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}>
                </input>
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start_date_id"
                    endDate={this.props.filters.endDate}
                    endDateId="end_date_id"
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.dispatch(setStartDate(startDate));
                        this.props.dispatch(setEndDate(endDate));
                    }
                    }
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => (
    {
        filters: state.filter
    }
);

export default connect(mapStateToProps)(ExpenseListFilter);