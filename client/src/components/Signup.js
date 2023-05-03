import React, { useState } from "react"

function SignUp({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  })
  const [errors, setErrors] = useState([])

  function handleChange(e) {
    setCredentials({...credentials, [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(credentials)
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })    
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => onLogin(user));
      } else {
        r.json()
        .then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <input
        type="password"
        id="password_confirmation"
        placeholder="Confirm Password"
        value={credentials.password_confirmation}
        onChange={handleChange}
      />
      <input type="submit"/>
      <br></br>
      {errors.map(err => {
        return <small key={err}>{err}</small>})}
    </form>
  );
}

export default SignUp