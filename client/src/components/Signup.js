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
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handleChange}
      />
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}