import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const style = {
        background: "#ffd1dc",
    }
    return (
        <div className="navbar">
            <NavLink 
            exact to="/"
            activeStyle={style}
            >
                Home
            </NavLink>
            <NavLink 
            to="/about"
            activeStyle={style}
            >
                About
            </NavLink>
            <NavLink
            to="/login"
            activeStyle={style}
            >
                Login
            </NavLink>
        </div>
    )
}

export default NavBar