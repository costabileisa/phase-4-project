import React, { useEffect, useState } from "react"

import DogCards from "./DogCards"

function Dogs() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch("/dogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => {
      if (r.ok) {
        r.json()
        .then(d => setDogs(d))
      }
    })
  }, [])

  return (
    <div className="all-dogs">
      <h1>All Dogs</h1>
      <DogCards dogs={dogs} />
    </div>
  )
}

export default Dogs