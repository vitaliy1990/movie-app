import type { MovieResponse } from '../types';

export const getReleaseYear = (data: string) => data.slice(0, 4);

export const getMovieMeta = (data: MovieResponse) => [
  {
    label: 'Country',
    value: data.production_countries.map((c) => c.name).join(', '),
  },
  {
    label: 'Original Language',
    value: data.original_language.toUpperCase(),
  },
  {
    label: 'Spoken Languages',
    value: data.spoken_languages.map((l) => l.name).join(', '),
  },
  {
    label: 'Runtime',
    value: `${data.runtime} minutes`,
  },
  {
    label: 'Status',
    value: data.status,
  },
  {
    label: 'Rating',
    value: `${data.vote_average} (${data.vote_count} votes)`,
  },
];
