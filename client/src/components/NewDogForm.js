import React, { useContext, useState } from 'react';
import { DogsContext } from '../context/dogs';

function NewDogForm() {
  const [url, setUrl] = useState("")
  const [errors, setErrors] = useState([])
  const { dogs, setDogs } = useContext(DogsContext)

  function handleChange(e) {
    setUrl(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    })
      .then(r => {
        if (r.ok) {
          r.json()
            .then(data => {
              setDogs([...dogs, data])
              setErrors("Dog Added!")
            });
        } else {
          r.json()
            .then(err => setErrors(err.errors))
        }
      })

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="url" onChange={handleChange} value={url} placeholder='url'></input>
      <input type="submit" value="Add Dog"></input>
      <br></br>
      {errors ? <small>{errors}</small> : null}
    </form>
  );
}

export default NewDogForm;
