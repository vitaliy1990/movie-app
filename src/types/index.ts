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
