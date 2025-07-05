import {
  createContext,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

import { fetchGenres } from '../../services/movies';
import type { Genre } from '../../types';

type GenresContextType = {
  genres: Genre[] | null;
  isLoading: boolean;
  error: string | null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const GenresContext = createContext<GenresContextType>({
  genres: null,
  isLoading: false,
  error: null,
});

const GenresProvider: FC<PropsWithChildren> = ({ children }) => {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchGenres();
        setGenres(response?.genres || null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'Unknown error');
        } else {
          setError('Unknown error');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <GenresContext.Provider value={{ genres, isLoading, error }}>
      {children}
    </GenresContext.Provider>
  );
};

export default GenresProvider;
