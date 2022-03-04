import { RootState } from '../redux/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mantine/core';
import Card from './Card';
import {  useGetHarryPotterCharactersQuery } from '../redux/api';
import Loader from './Loader';
import { setPages } from '../redux/util.reducer';
const CardDeck: React.FC = () => {
  const dispatch = useDispatch();
  const {searchParam,pages} = useSelector((state: RootState) => state.util);
  const { data, isLoading } = useGetHarryPotterCharactersQuery({ page: pages.currentPage, query: searchParam });

  useEffect(() => {
    if (data != undefined) {
      dispatch(setPages(data))
    }
  }, [data]);
  
  return (
    <div style={{ marginTop: '6rem' }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid>
          {data?.docs.map((props) => (
            <Grid.Col lg={3}>
              <Card {...props} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default CardDeck