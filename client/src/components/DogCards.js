import React, { useState, useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { UserContext } from '../context/user';

function DogCards({ dogs }) {
  const [errors, setErrors] = useState([])
  const { user, setUser } = useContext(UserContext);
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
        .then(updatedUser => {
          setUser(updatedUser);
        })
      } else {
        r.json()
        .then(err => setErrors(err.errors))
      }
    })
    
    console.log(`Liked image with id ${imageId}`);
  };

  console.log(errors)

  return (
    <ImageList sx={{ width: "100%", height: "500px"}} cols={5} rowHeight={200}>
      {itemData.map((item) => {
        let isLiked = false
        
        if (user.dogs && user.dogs.some(dog => dog.id === item.id)) {
          isLiked = true
        }
        
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
            <IconButton onClick={handleLike} aria-label="like" sx={{ position: 'absolute', bottom: 10, right: 10 }}>
              <FavoriteIcon sx={{ color: isLiked ? 'red' : 'inherit' }} />
            </IconButton>
          </ImageListItem>
        )
      })}
    </ImageList>
  );
}

export default DogCards;
