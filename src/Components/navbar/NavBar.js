import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/babyyoda">Baby Yoda & Totoro</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/dreamergirl">Dreamer Girl</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/chartsvg">Funding Flow Chart</Link>
            </li>
        </ul>
       
    )
}