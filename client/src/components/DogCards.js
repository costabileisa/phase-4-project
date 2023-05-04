import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function DogCards({ dogs }) {
  const itemData = dogs
  return (
    <ImageList sx={{ width: "100%", height: "500px" }} cols={5} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.url}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default DogCards