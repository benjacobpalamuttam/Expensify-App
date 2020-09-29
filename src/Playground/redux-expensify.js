import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Action Generators

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => (
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
);

const removeExpense = ({ id }) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
);

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//Default State

const expenseDefaultState = [];

const filterDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

//Reducers

const expenseReducer = (state = expenseDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((item) => item.id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

//Create Store

const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filter: filterReducer
    }));

const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense)=>{
        const startDatematch = typeof filters.startDate !=='number' || expense.createdAt >= filters.startDate;
        const endDateMatch =  typeof filters.endDate !=='number' || expense.createdAt <= filters.endDate;
        const textMatch = typeof filters.text !=='string' || expense.description.toLowerCase().includes(filters.text.toLowerCase()); 
        return startDatematch && endDateMatch && textMatch;
    }).sort((a,b)=>{
         if (filters.sortBy === 'date'){
             return a.createdAt < b.createdAt ? 1 : -1
         }else{
             return a.amount < b.amount ? -1 : 1
         }
    })

};

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expense,state.filter));
});


//Change state for expense

const objOne = store.dispatch(addExpense({ description: 'rent', note: 'My note', amount: 100 ,createdAt:100}));
const removeObj = store.dispatch(addExpense(
    { description: 'coffee', note: 'My note 2', amount: 1000,createdAt:130 }
));
// store.dispatch(removeExpense({ id: removeObj.expense.id }));

// store.dispatch(editExpense(objOne.expense.id, { amount: 700 }));

//Change state for filter

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(150));
