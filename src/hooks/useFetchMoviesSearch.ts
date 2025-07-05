import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

import { fetchMovies } from '../services/movies';
import type { ResponseMovies } from '../types';

export const useFetchMoviesSearch = () => {
  const [searchParams] = useSearchParams();

  const [data, setData] = useState<ResponseMovies | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchMovies(searchParams.toString(), signal);
        setData(response);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error.message);
          toast.error('Error fetching movies');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [searchParams]);

  return { data, isLoading, error };
};
