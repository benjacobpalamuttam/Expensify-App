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

console.log('test');
const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
