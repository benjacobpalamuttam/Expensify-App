import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routers/AppRouter';
import store from './store/configureStore';
import { Provider } from 'react-redux'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// store.dispatch(addExpense({ description: 'Water Bill', amount: 1500, createdAt: 0 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 1200, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 3000, createdAt: 0 }));
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expense, state.filter);
const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
