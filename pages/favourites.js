/** @format */

import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react';

export default function favourites({ favourites }) {
  return (
    <Grid container spacing={2}>
      {favourites.map((item, key) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <img
              src={item.image.url}
              alt={item.image.id}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/favourites', {
    headers: {
      'x-api-key': '52b7ea7f-312e-4d9a-bfc8-a6da11ccb4ef',
    },
  });
  const favourites = await res.json();

  return {
    props: {
      favourites,
    },
  };
};
