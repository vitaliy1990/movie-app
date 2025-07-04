import { type FC } from 'react';

import { useFetchMoviesSearch } from '../../hooks/useFetchMoviesSearch';
import MovieList from '../MovieList/MovieList';
import ProgressBar from '../ProgressBar/ProgressBar';
import Section from '../Section/Section';

const MovieResults: FC = () => {
  const { isLoading, data } = useFetchMoviesSearch();

  return (
    <Section>
      <ProgressBar isLoading={isLoading} />
      <div className='flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8'>
        <h2 className='text-2xl font-semibold text-gray-900'>Search Results</h2>
        <span className='font-medium text-purple-700'>
          {data?.total_results || 0} movies found
        </span>
      </div>
      <MovieList
        moviesData={data}
        isLoading={isLoading}
      />
    </Section>
  );
};

export default MovieResults;
