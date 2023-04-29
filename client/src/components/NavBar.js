import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar({ user, onLogout }) {
  const history = useHistory()

  const style = {
      background: "#ffd1dc",
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function loginButton() {
    history.push("/login")
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
      {user ? 
      <button style={{float: "right"}} onClick={handleLogout}>Logout</button> :
      <button style={{float: "right"}} onClick={loginButton}>Login</button>
      }
    </div>
  )
}

export default NavBar