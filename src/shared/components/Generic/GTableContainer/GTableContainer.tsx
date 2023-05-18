import React from 'react';

import { Grid } from '@mui/material';

export default function GTableContainer(props: any) {
  return (
    <Grid container spacing={2} justifyContent="space-around">
      {props.children}
    </Grid>
  );
}
