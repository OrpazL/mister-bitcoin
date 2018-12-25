import React from 'react';
import './NavBar.scss';

import {NavLink} from 'react-router-dom';

const NavBar = props => {
    
    return (
        <nav>
            <ul style={{ listStyle: 'none' }}>
                <NavLink exact to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink exact to="/contact">
                    <li>Contact Page</li>
                </NavLink>
                <NavLink exact to="/stats">
                    <li>Stats</li>
                </NavLink>
            </ul>
        </nav>
    );
}
export default NavBar;