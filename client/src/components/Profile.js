import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"

import { UserContext } from "../context/user"

function Profile() {
  const history = useHistory()
  const { user, setUser } = useContext(UserContext)

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

  function handleDelete() {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    })
    .then(() => {
      setUser(null)
      history.push("/signup")
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
      <button onClick={() => handleDelete()}>Delete Account</button>
    </div>
  )

}

export default Profile