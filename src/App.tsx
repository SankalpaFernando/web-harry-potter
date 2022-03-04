import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { useGetHarryPotterCharactersQuery } from './redux/api';
import SearchBar from './components/SearchBar';
import { Card, Grid, Text } from '@mantine/core';
import CardDeck from './components/CardDeck';
import DeckPagination from './components/DeckPagination';

const App: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <CardDeck />
      <DeckPagination />
    </div>
  );
};

export default App;
