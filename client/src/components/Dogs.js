import React from "react"
import { useHistory } from "react-router-dom"

import DogCards from "./DogCards"

function Dogs() {
  const history = useHistory()

  function handleClick() {
    history.push("/add_dog")
  }

  return (
    <div className="all-dogs">
      <h1>All Dogs</h1>
      <button onClick={handleClick}>Add Dog</button>
      <DogCards />
    </div>
  )
}

export default Dogs