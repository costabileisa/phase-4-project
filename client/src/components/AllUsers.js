import React, { useState, useEffect, useContext } from "react"
import { DogsContext } from "../context/dogs"

function AllUsers() {
  const [allUsers, setAllUsers] = useState([])
  const [userDogs, setUserDogs] = useState([])
  const topDogUrls = []
  const { dogs } = useContext(DogsContext)


  for (const id in userDogs.top_dogs) {
    const foundDog = dogs.find(dog => dog.id === parseInt(id))
    if (foundDog) {
      topDogUrls.push(foundDog.url)
    }
  }  

  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(d => setAllUsers(d))
  }, [])

  useEffect(() => {
    fetch("/user_dogs")
    .then(r => r.json())
    .then(d => setUserDogs(d))
  }, [])

  return(
    <div className="all-users">
      <h1>All Current Users</h1>
      {allUsers ? allUsers.map(user => <p key={user.username}>{user.username}</p>) : null}
      <h1>Top 5 Most Popular Dogs</h1>
      {topDogUrls.map(url => <img key={url} src={url} style={{width:"1/5", height: "auto"}} />)}
    </div>
  )
}

export default AllUsers