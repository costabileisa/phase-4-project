import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DogsContext } from "../context/dogs";

function Dog() {
  const { id } = useParams()
  const [url, setUrl] = useState(null)

  const { dogs, setDogs } = useContext(DogsContext)

  const history = useHistory()
  useEffect(() => {
    fetch(`/dogs/${id}`, {
      method: "GET"
    })
      .then(r => r.json())
      .then(data => {
        setUrl(data.url)
      })
  }, [id])

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/dogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: url })
    })
      .then(r => r.json())
      .then(newDog => {
        const newDogs = dogs.map(dog => {
          return dog.id === parseInt(id) ? newDog : dog
        })
        setDogs(newDogs)
      })
  }

  function handleChange(e) {
    setUrl(e.target.value)
  }

  function handleClick(e) {
    fetch(`/dogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const newDogs = dogs.filter(dog => dog.id !== parseInt(id))
        setDogs(newDogs)
        history.push("/dogs")
      })
  }

  return (
    <div className="dog">
      {url ? <img src={url} alt="dog" /> : null}
      <button onClick={handleClick}>Delete Dog</button>
      <form id={id} onSubmit={handleSubmit}>
        <input id={id} value={url} onChange={handleChange} type="url" />
        <input id={id} type="submit" value="Submit Change" />
      </form>
    </div>
  )

}

export default Dog;