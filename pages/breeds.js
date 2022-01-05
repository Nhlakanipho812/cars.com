/** @format */

import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

export default function Breeds({ breeds }) {
  const router = useRouter();

  const onClick = (item) => {
    localStorage.setItem('breed', item.description);
    localStorage.setItem('breed-name', item.name);
    router.push('/cat-search/breed/[id]', `/cat-search/breed/${item.id}`);
  };

  return (
    <Grid container spacing={2}>
      {breeds.map((item, key) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Button variant='outlined' fullWidth onClick={() => onClick(item)}>
              {item.name}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': '52b7ea7f-312e-4d9a-bfc8-a6da11ccb4ef',
    },
  });
  const breeds = await res.json();

  return {
    props: {
      breeds,
    },
  };
};
