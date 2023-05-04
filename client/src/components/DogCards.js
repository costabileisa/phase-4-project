import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

function DogCards({ dogs }) {
  const itemData = dogs;

  const handleLike = (e) => {
    const imageId = e.target.parentNode.parentNode.previousSibling.id
    // Add your like button functionality here
    console.log(`Liked image with id ${imageId}`);
  };

  return (
    <ImageList sx={{ width: "100%", height: "500px"}} cols={5} rowHeight={200}>
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
            <IconButton onClick={handleLike} aria-label="like" sx={{ position: 'absolute', bottom: 10, right: 10 }}>
              <FavoriteIcon />
            </IconButton>
          </ImageListItem>
        )
      })}
    </ImageList>
  );
}

export default DogCards;
