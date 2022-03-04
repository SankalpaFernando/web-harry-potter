import React from 'react';
import { Grid, Skeleton } from '@mantine/core';
import '../styles/Card.scss';

const Loader: React.FC = () => {
  return (
    <Grid>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
      <Grid.Col lg={3}>
        <Skeleton visible={true} className="card"></Skeleton>
      </Grid.Col>
    </Grid>
  );
};

export default Loader;
