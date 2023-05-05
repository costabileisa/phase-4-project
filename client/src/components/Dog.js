import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DogsContext } from "../context/dogs";

function Dog() {
  const { id } = useParams()
  const { dogs } = useContext(DogsContext)

  const dog = dogs.find(dog => parseInt(dog.id) === parseInt(id))

  return (
    <div className="dog">
      <img src={dog.url} alt={dog.id} />
    </div>
  )

}

export default Dog;