import React from 'react'

import './Header.css';

export default function Header() {
  return (
    <header>
        <h1>
            <a href="/">Alpha Food</a> 
        </h1>
        <ul>
            <li>
                <a href="/foods">Menu</a>
            </li>
            <li>
                <a href="/">Create Item</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/register">Register</a>
            </li>
            <li>
                <a href="/">Logout</a>
            </li>
        </ul>
    </header>
  )
}
