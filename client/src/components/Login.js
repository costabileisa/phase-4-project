import React, { useState } from "react";

function Login ({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    setCredentials({ [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    const username = credentials.username
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => onLogin(user));
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
        <small>
          Don't have an account?
        </small>
        <br />
        <button>Signup</button>

      </form>
    </div>
  );
}

export default Login