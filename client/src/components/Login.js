import React, { useState } from "react";
import { Link } from "react-router-dom"

function Login ({ onLogin }) {  
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  const [errors, setErrors] = useState([])

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          onLogin(user)
        });
      } else {
        r.json()
        .then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <div className="Login">
      <form className="form" onSubmit={handleSubmit} >
        <input
          placeholder="Username"
          id="username"
          onChange={handleChange}
          type="text"
        />
        <input
          placeholder="Password"
          id="password"
          onChange={handleChange}
          type="password"
        />
        <input value="Login" type="submit" />
        <br />
        { errors ? <small>{errors}</small> : null}
        <h3 style={{margin: "0px"}}>
          Don't have an account?
        </h3>
        <Link id="signup" to="/signup">Signup</Link>

      </form>
    </div>
  );
}

export default Login