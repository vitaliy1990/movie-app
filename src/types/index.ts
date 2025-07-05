export type Movie = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type MoviesFilter = {
  query: string;
  language?: string;
  region?: string;
  year?: string;
  primary_release_year?: string;
  include_adult?: boolean;
  page?: string;
};

export type Option = {
  label: string;
  value: string;
};

export type ResponseMovies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

/*  */

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type HistoryItem = { id: string | number; title: string };

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieResponse = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | unknown;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type ResponseGenres = {
  genres: Genre[];
};

export type ResponseError = {
  success: boolean;
  status_code: number;
  status_message: string;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
  pageButtonCount?: number;
  perPage: number;
};

export type createRangeType = (start: number, end: number) => Array<number>;

export type Genre = { id: number; name: string };
