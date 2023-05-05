import React, { useState, useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { UserContext } from '../context/user';
import { DogsContext } from "../context/dogs"


function DogCards() {
  const [errors, setErrors] = useState([])
  const { user, setUser } = useContext(UserContext);
  const { dogs } = useContext(DogsContext)
  const itemData = dogs;

  const handleLike = (e) => {
    const imageId = e.target.parentNode.parentNode.previousSibling.id;

    fetch("/user_dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: parseInt(user.id),
        dog_id: parseInt(imageId)
      })
    })
      .then(r => {
        if (r.ok) {
          r.json()
            .then(updatedDogs => {
              setUser({...user, dogs: updatedDogs});
              e.target.style.color = "red";
            })
        } else {
          r.json()
            .then(err => setErrors(err.errors))
        }
      })
  };

  console.log(errors)

  return (
    <ImageList sx={{ width: "100%", height: "500px" }} cols={5} rowHeight={200}>
      {itemData.map((item) => {
        return (
          <ImageListItem key={item.id}>
            <img
              src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.url}
              loading="lazy"
              onMouseOver={(event) => {
                event.target.style.cursor = "pointer";
                event.target.style.opacity = 0.8;
              }}
              onMouseOut={(event) => {
                event.target.style.cursor = "default";
                event.target.style.opacity = 1;
              }}
              id={item.id}
            />
            <IconButton onClick={(e) => user ? handleLike(e) : alert("You're not logged in!")} aria-label="like" sx={{ position: 'absolute', bottom: 10, right: 10 }}>
              <FavoriteIcon
                sx={
                  user && user.dogs && user.dogs.some(dog => dog.id === item.id)
                    ? { color: "red" }
                    : { color: "inherit" }
                }
              />            
            </IconButton>
          </ImageListItem>
        )
      })}
    </ImageList>
  );
}

export default DogCards;
