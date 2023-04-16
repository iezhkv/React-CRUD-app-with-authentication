import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <header>
        <h1>
            <Link to="/">Alpha Food</Link>
        </h1>
        <ul>
            <li>
                <Link to="/foods">Menu</Link>
            </li>
            <li>
                <Link to="/create">Create Item</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
    </header>
  )
}
