import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

function NavBar({ onLogout }) {
  const history = useHistory()

  const { user } = useContext(UserContext)

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
      to="/dogs"
      activeStyle={style}
      >
        All Dogs
      </NavLink>
      <NavLink
      to="/profile"
      activeStyle={style}
      style={{float: "right"}}
      >
        Profile
      </NavLink>
      {user ? 
      <button style={{float: "right"}} onClick={handleLogout}>Logout</button> :
      <button style={{float: "right"}} onClick={loginButton}>Login</button>
      }
    </div>
  )
}

export default NavBar