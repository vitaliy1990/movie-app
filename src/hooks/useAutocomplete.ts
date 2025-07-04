import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import { fetchMovies } from '../services/movies';
import type { Movie } from '../types';
import { useDebounce } from './useDebounce';
import { decodeParam } from '../utils/params';

export const useAutocomplete = (query: string) => {
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchAutocomplete = async () => {
      setLoading(true);
      try {
        const value = decodeParam(debouncedQuery);
        const response = await fetchMovies(`query=${value}`, signal);

        setResults(response.results);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError('Failed to fetch suggestions');
          toast.error('Failed to fetch suggestions');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAutocomplete();

    return () => controller.abort();
  }, [debouncedQuery]);

  return { results, loading, error };
};
