import React, { useContext, useState } from "react"

import { UserContext } from "../context/user"

function Profile() {
  const { user, setUser } = useContext(UserContext)
  console.log(user)

  const [errors, setErrors] = useState([])
  const [credentials, setCredentials] = useState({
    username: user.username,
    bio: user.bio || ""
  })
  const [disabled, setDisabled] = useState(true)

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    console.log(credentials)
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        bio: credentials.bio
      }),
    })    
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          setUser(user)
          setDisabled(true)
        });
      } else {
        r.json()
        .then(err => setErrors(err.errors))
        setDisabled(true)
      }
    })
  }

  return (
    <div className="Profile">
      <form className="form" onSubmit={handleSubmit} >
        <input
          value={credentials.username}
          id="username"
          onChange={handleChange}
          type="text"
          disabled={disabled}
        />
        <input
          placeholder="Bio"
          value={credentials.bio}
          id="bio"
          onChange={handleChange}
          type="textarea"
          disabled={disabled}
        />
        {disabled ? null : <input type="submit"/>}
        <br />
        { errors ? <small>{errors}</small> : null}
      </form>
      <button onClick={() => setDisabled(false)}>Edit Info</button>
      <button>Delete Account</button>
    </div>
  )

}

export default Profile