import React, { useContext } from "react"

import { UserContext } from "../context/user"

function UserDogs() {
  const { user, setUser } = useContext(UserContext)

  function handleClick(e) {
    const updatedDogs = user.dogs.filter(dog => dog.id !== e.target.id)
    fetch(`/user_dogs/${e.target.id}`, {
      method: "DELETE"
    })
    .then(() => setUser(prev => ({...prev, dogs: updatedDogs})))
  }

  return (
    <div className="user-dogs">
      <h1>{user.username}'s Dogs</h1>
      <p>Click an image to remove from your favorites</p>
      {user.dogs.map(dog => <img onClick={e=> handleClick(e)} key={dog.dogid} id={dog.id} src={dog.url} alt="image from https://thedogapi.com/" />
      )}
    </div>
  )
}

export default UserDogs