import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar
