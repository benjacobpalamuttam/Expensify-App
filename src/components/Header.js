import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => (
    <div>
        <ul>
            <li>
                <NavLink to='/' activeClassName='is-active' exact> Go Home </NavLink>
            </li>
            <li>
                <NavLink to='/create' activeClassName='is-active'>Create Expense </NavLink>
            </li>
            <li>
                <NavLink to='/help' activeClassName='is-active'> Help </NavLink>
            </li>
        </ul>
    </div>
);

export default Header;