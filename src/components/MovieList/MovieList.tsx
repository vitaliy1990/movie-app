import { type FC } from 'react';

import type { ResponseMovies } from '../../types';
import EmptySearch from '../EmptySearch/EmptySearch';
import Loader from '../Loader/Loader';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';

type Props = {
  moviesData: ResponseMovies | null;
  isLoading: boolean;
};

const MovieList: FC<Props> = ({ moviesData, isLoading }) => {
  if (isLoading && !moviesData) {
    return <Loader infoText='Searching for movies...' />;
  }

  if (!moviesData?.results?.length) {
    return <EmptySearch />;
  }

  const { page, results, total_pages } = moviesData;

  const renderMoviesList = () => {
    if (isLoading) {
      return <LoadingSkeleton />;
    }

    return results.map((movie) => (
      <MovieCard
        key={movie.id}
        {...movie}
      />
    ));
  };

  return (
    <>
      <div className='movies-grid'>{renderMoviesList()}</div>
      {total_pages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={total_pages}
          perPage={20}
        />
      )}
    </>
  );
};

export default MovieList;
