import React, { useContext, useState } from 'react';
import { DogsContext } from '../context/dogs';

function NewDogForm() {
  const [url, setUrl] = useState("")
  const { dogs } = useContext(DogsContext)

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
      body: JSON.stringify(url)
    })
      .then(r => r.json())
      .then(data => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="url" onChange={handleChange} value={url} placeholder='url'></input>
      <input type="submit" value="Add Dog"></input>
    </form>
  );
}

export default NewDogForm;
