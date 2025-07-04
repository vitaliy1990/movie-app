import { useCallback, useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

import type { MoviesFilter } from '../types';
import { decodeParam, encodeParam } from '../utils/params';
import { isBoolean } from '../utils/types';

export const useMoviesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: Partial<MoviesFilter> = useMemo(
    () =>
      Object.fromEntries(
        Array.from(searchParams.entries()).map(([key, value]) => [
          key,
          decodeParam(value),
        ])
      ),
    [searchParams]
  );

  const setFilter = useCallback(
    (filters: MoviesFilter) => {
      setSearchParams((params) => {
        Object.entries(filters).forEach(([key, value]) => {
          if (key === 'query' || isBoolean(value) || !!value) {
            params.set(key, encodeParam(value));
          } else {
            params.delete(key);
          }
        });

        return params;
      });
    },
    [setSearchParams]
  );

  const resetFilters = () => setSearchParams({});

  return { filters, setFilter, resetFilters };
};
