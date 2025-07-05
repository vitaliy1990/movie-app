import { memo, type FC } from 'react';

import type { MovieResponse } from '../../types';
import { getMovieMeta, getReleaseYear } from '../../utils/movies';
import Section from '../Section/Section';
import TagMovieList from '../TagMovieList/TagMovieList';
import MovieDetailsItem from './MovieDetailsItem/MovieDetailsItem';
import MovieLinks from '../MovieLinks/MovieLinks';

const MovieDetails: FC<MovieResponse> = (data) => {
  const {
    release_date,
    title,
    overview,
    genres,
    production_companies,
    imdb_id,
    homepage,
  } = data;

  const releaseYear = getReleaseYear(release_date);
  const metaItems = getMovieMeta(data);

  return (
    <Section className='flex flex-1 flex-col gap-4 p-6'>
      <h3 className='truncate text-xl font-semibold text-[#333]'>{title}</h3>
      <div className='font-medium text-[#764ba2]'>{releaseYear}</div>
      <p className='leading-[1.5] text-[#666]'>{overview}</p>
      <TagMovieList
        genreIds={genres}
        title='Genres:'
      />
      {metaItems.map((item) => (
        <MovieDetailsItem
          key={item.label}
          label={item.label}
          value={item.value}
        />
      ))}
      <MovieDetailsItem label='Production'>
        {production_companies.map((pc) => (
          <span
            key={pc.id}
            className='mr-2'
          >
            {pc.name}
          </span>
        ))}
      </MovieDetailsItem>
      <MovieLinks
        imdb_id={imdb_id}
        homepage={homepage}
      />
    </Section>
  );
};

export default memo(MovieDetails);
