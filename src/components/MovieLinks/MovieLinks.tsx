import { Link } from 'react-router-dom';

import MovieDetailsItem from '../MovieDetails/MovieDetailsItem/MovieDetailsItem';

type Props = {
  imdb_id?: string | null;
  homepage?: string | null;
};

const imbdURL = import.meta.env.VITE_BASE_IMDB_URL;

const MovieLinks = ({ imdb_id, homepage }: Props) => {
  const renderIMDbLink = () => {
    if (!imdb_id) {
      return null;
    }

    return (
      <MovieDetailsItem label='IMDb'>
        <Link
          to={`${imbdURL}/${imdb_id}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline'
        >
          IMDb page
        </Link>
      </MovieDetailsItem>
    );
  };

  const renderHomepageLink = () => {
    if (!homepage) {
      return null;
    }

    return (
      <MovieDetailsItem label='Official Website'>
        <Link
          to={homepage}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 underline'
        >
          Visit Site
        </Link>
      </MovieDetailsItem>
    );
  };

  return (
    <>
      {renderIMDbLink()}
      {renderHomepageLink()}
    </>
  );
};

export default MovieLinks;
