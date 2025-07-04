import { useContext } from 'react';

import { GenresContext } from '../components/GenresProvider/GenresProvider';

export const useGenres = () => {
  const context = useContext(GenresContext);

  if (!context) {
    throw new Error('useGenres must be used within a GenresProvider');
  }
  return context;
};
