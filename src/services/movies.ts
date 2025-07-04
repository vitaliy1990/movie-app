import type { ResponseGenres, ResponseMovies } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (
  queryParams: string,
  signal?: AbortSignal
): Promise<ResponseMovies> => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&${
    queryParams || ''
  }`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    signal,
  });

  return await response.json();
};

export const fetchGenres = async (): Promise<ResponseGenres> => {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  const response = await fetch(url);
  return await response.json();
};
