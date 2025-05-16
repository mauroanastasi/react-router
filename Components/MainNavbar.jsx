import React from 'react'
import { NavLink } from 'react-router-dom'


const MainNavbar = () => {
    const links = [
        {
            path: "/",
            label: "Homepage"
        },
        {
            path: "/about",
            label: "About"
        },
        {
            path: "/products",
            label: "Products"
        }
    ]


    return (


        <header>
            <nav>
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={link.path}>{link.label}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar
