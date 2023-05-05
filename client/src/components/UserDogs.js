import React, { useContext, useState } from "react"
import { DogsContext } from "../context/dogs"

import { UserContext } from "../context/user"

function UserDogs() {
  const [disabled, setDisabled] = useState(true)
  const [dogNames, setDogNames] = useState({})

  const { user, setUser } = useContext(UserContext)
  const { dogs } = useContext(DogsContext)

  function handleClick(e) {
    const updatedDogs = user.dogs.filter(dog => dog.dogid !== e.target.id)
    fetch(`/user_dogs/${e.target.id}`, {
      method: "DELETE"
    })
      .then(() => {
        setUser(prevUser => ({
          ...prevUser,
          dogs: updatedDogs
        }))
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newUserDogs = []
    const nameArr = Object.entries(dogNames)
    nameArr.forEach((e) => {
      fetch(`/user_dogs/${e[0]}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: e[1]})
      })
      .then(r => {
          if (r.ok) {
            r.json()
            .then(d => newUserDogs.push(d))
          }
        })
    })

    console.log(newUserDogs)
  }

  function handleChange(e) {
    setDogNames({ ...dogNames, [e.target.id]: e.target.value })
  }

  return (
    <div className="user-dogs">
      <h1>{user.username}'s Dogs</h1>
      <p>Click an image to remove from your favorites</p>
      <form onSubmit={handleSubmit}>
      {disabled ? <button onClick={() => setDisabled(!disabled)}>{disabled ? "Edit" : "Done"}</button> : <button onClick={() => setDisabled(!disabled)} type="submit" >{disabled ? "Edit" : "Done"}</button>}
      </form>
      {user.user_dogs.map(userDog => {
        let dog;
        dog = dogs ? dogs.find(dog => parseInt(dog.id) === parseInt(userDog.dog_id)) : dog
        return (
          <div key={userDog.id}>
            <img onClick={e => handleClick(e)} id={userDog.id} src={dogs ? dog.url : ""} alt="image from https://thedogapi.com/" />
            <input onChange={handleChange} type="text" value={userDog.name} id={userDog.id} placeholder="Name" disabled={disabled} />
          </div>
        )
      }
      )}
    </div>
  )
}

export default UserDogs