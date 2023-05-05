import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Dog() {
  const { id } = useParams()
  const [dog, setDog] = useState()

  useEffect(() => {
    fetch(`/dogs/${id}`, {
      method: "GET"
    })
    .then(r => r.json())
    .then(data => setDog(data))
  }, [])

  return (
    <div className="dog">
      <img src={dog.url} />
      <button onClick={() => {}}>Delete Dog</button>
    </div>
  )

}

export default Dog;