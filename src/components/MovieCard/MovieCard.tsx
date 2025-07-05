import { memo, type FC } from 'react';

import { Link } from 'react-router-dom';

import type { Movie } from '../../types';
import { getReleaseYear } from '../../utils/movies';
import Poster from '../Poster/Poster';
import TagMovieList from '../TagMovieList/TagMovieList';

const MovieCard: FC<Movie> = ({
  poster_path,
  title,
  overview,
  vote_average,
  release_date,
  genre_ids,
  id,
}) => {
  const releaseYear = getReleaseYear(release_date);

  return (
    <Link
      to={`/movies/${id}`}
      className='movie-card cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg'
    >
      <Poster
        posterPath={poster_path}
        title={title}
        vote={vote_average}
      />
      <div className='flex flex-col gap-4 p-6'>
        <div className='flex flex-col gap-1'>
          <h3 className='truncate text-xl leading-[1.3] font-semibold text-[#333]'>
            {title}
          </h3>
          <div className='font-medium text-[#764ba2]'>{releaseYear}</div>
        </div>
        <p className='line-clamp-3 text-[0.95rem] leading-[1.5] text-[#666]'>
          {overview}
        </p>
        <TagMovieList genreIds={genre_ids} />
      </div>
    </Link>
  );
};

export default memo(MovieCard);
