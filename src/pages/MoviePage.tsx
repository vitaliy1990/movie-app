import { Navigate, useParams } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Poster from '../components/Poster/Poster';
import { useFetchMoviesById } from '../hooks/useFetchMoviesById';

const MoviePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchMoviesById(id as string);

  if (isLoading) {
    return <Loader rootClassName='h-full p-0 flex-1' />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        rootClassName='flex-1'
      />
    );
  }

  if (!data) {
    return (
      <Navigate
        to='/not-found'
        replace
      />
    );
  }

  return (
    <>
      <title>{data.title}</title>
      <div className='flex flex-col gap-8 md:flex-row'>
        <Poster
          rootClassName='rounded-xl overflow-hidden h-full w-full md:w-2/6'
          posterPath={data.poster_path}
          title={data.title}
          vote={data.vote_average}
        />
        <MovieDetails {...data} />
      </div>
    </>
  );
};

export default MoviePage;
