import React from 'react';
import { Grid, Input, SimpleGrid } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { useDispatch } from 'react-redux';
import { setSearchParams } from '../redux/util.reducer';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(setSearchParams(e.currentTarget.value));
  };
  return (
    <Grid style={{ marginTop: '2rem' }}>
      <Grid.Col lg={4}></Grid.Col>
      <Grid.Col lg={4}>
        <Input
          onKeyUp={onKeyUp}
          mx={10}
          rightSection={
            <MagnifyingGlassIcon
              height={25}
              style={{ marginRight: '.8rem' }}
              width={25}
            />
          }
          placeholder="Search For the Character......"
          radius="lg"
          size="lg"
        />
      </Grid.Col>
      <Grid.Col lg={4}></Grid.Col>
    </Grid>
  );
};

export default SearchBar;
