import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '../util/types';


export interface ICharacter {
  docs: Character[];
  totalPages: number;
  page: number;
}
console.log(import.meta.env)
const { VITE_APP_BASE_URL:baseUrl } = import.meta.env;

export const HarryPotterApi = createApi({
  reducerPath: 'HarryPotterApi',
  baseQuery: fetchBaseQuery({ baseUrl:baseUrl?.toString()}),
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
