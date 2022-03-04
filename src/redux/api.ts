import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '../util/types';

export interface ICharacter {
  docs: Character[];
  totalPages: number;
  page: number;
}

export const HarryPotterApi = createApi({
  reducerPath: 'HarryPotterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://harry-api-v1.herokuapp.com' }),
  endpoints: (builder) => ({
    getHarryPotterCharacters: builder.query<
      ICharacter,
      { page: number; query: string }
    >({
      query: ({ page, query }) => `?page=${page}&query=${query}`,
    }),
  }),
});

export const { useGetHarryPotterCharactersQuery } = HarryPotterApi;
