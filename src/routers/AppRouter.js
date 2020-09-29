import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import HelpExpensePage from '../components/Help';
import ExpenseDashboardPage from '../components/Dashboard';
import NoPagefound from '../components/NoPageFound';

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route exact path="/edit/:id" component={EditExpensePage}/> 
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NoPagefound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoute;

