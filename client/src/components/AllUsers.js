import React, { useState, useEffect } from "react"

function AllUsers() {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(d => setAllUsers(d))
  }, [])

  console.log(allUsers)
  return(
    <div className="all-users">
      <h1>All Current Users</h1>
      {allUsers ? allUsers.map(user => <p key={user.username}>{user.username}</p>) : null}
    </div>
  )
}

export default AllUsers