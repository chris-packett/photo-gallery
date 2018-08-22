import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category">Category</Link></li>
                    <li><Link to="/category/picture">Picture</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
