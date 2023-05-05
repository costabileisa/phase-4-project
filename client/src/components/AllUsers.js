import React, { useState, useEffect } from "react"

function AllUsers() {
  const [allUsers, setAllUsers] = useState([])
  const [userDogs, setUserDogs] = useState([])

  console.log(userDogs)

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
      <h1>Most Popular Dogs Among Users</h1>
      {/* {userDogs.top_dogs.map(() => {})} */}
    </div>
  )
}

export default AllUsers