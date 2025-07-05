import type { MovieResponse, ResponseGenres, ResponseMovies } from '../types';
import { handleResponse } from '../utils/services';

const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (
  queryParams: string,
  signal?: AbortSignal
): Promise<ResponseMovies | null> => {
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

  return await handleResponse<ResponseMovies>(response);
};

export const fetchMovieById = async (
  id: string,
  language?: string
): Promise<MovieResponse | null> => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${
    language || 'en-US'
  }`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });

  return await handleResponse<MovieResponse>(response);
};

export const fetchGenres = async (): Promise<ResponseGenres | null> => {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  const response = await fetch(url);

  return await handleResponse<ResponseGenres>(response);
};
