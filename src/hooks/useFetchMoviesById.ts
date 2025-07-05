import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { fetchMovieById } from '../services/movies';
import type { MovieResponse } from '../types';

export const useFetchMoviesById = (id: string) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const language = searchParams.get('language') || 'en-US';

  const [data, setData] = useState<MovieResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchMovieById(id, language);
        setData(response);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error.message);
          toast.error('Error fetching movie');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, language, navigate]);

  return { data, isLoading, error };
};
