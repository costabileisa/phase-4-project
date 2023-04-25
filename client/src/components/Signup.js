import React, { useState } from "react"

function SignUp({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  })

  function handleChange(e) {
    setCredentials({ [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credentials
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
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
    </form>
  );
}

export default SignUp