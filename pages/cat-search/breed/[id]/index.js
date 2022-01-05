/** @format */
import { Button, ButtonGroup, Grid, IconButton } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';

export default function CatsSearchCategory({ searchResult }) {
  const like = async (id) => {
    const response = await fetch('https://api.thecatapi.com/v1/favourites', {
      method: 'POST',
      body: JSON.stringify({ image_id: id }),
      headers: {
        'x-api-key': '52b7ea7f-312e-4d9a-bfc8-a6da11ccb4ef',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <h2>{localStorage.getItem('breed-name')}</h2>
        <div>{localStorage.getItem('breed')}</div>
      </Grid>

      {searchResult.map((item, key) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Box style={{ height: 300, marginBottom: 4 }}>
              <img
                src={item.url}
                alt={item.id}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Box>
              <Button
                color='primary'
                variant='text'
                fullWidth
                onClick={() => like(item.id)}>
                Like
              </Button>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${context.params.id}`,
    {
      headers: {
        'x-api-key': '52b7ea7f-312e-4d9a-bfc8-a6da11ccb4ef',
      },
    }
  );

  const searchResult = await res.json();

  return {
    props: {
      searchResult,
    },
  };
};
