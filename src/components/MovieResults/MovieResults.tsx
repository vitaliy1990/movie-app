import { type FC } from "react";
import Section from "../Section/Section";
import ProgressBar from "../ProgressBar/ProgressBar";
import MovieList from "../MovieList/MovieList";
import { useFetchMoviesSearch } from "../../hooks/useFetchMoviesSearch";

const MovieResults: FC = () => {
  const { isLoading, data } = useFetchMoviesSearch();

  return (
    <Section>
      <ProgressBar isLoading={isLoading} />
      <div className="flex flex-col  md:flex-row justify-between items-center gap-4 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900">Search Results</h2>
        <span className="text-purple-700 font-medium">
          {data?.total_results || 0} movies found
        </span>
      </div>
      <MovieList moviesData={data} isLoading={isLoading} />
    </Section>
  );
};

export default MovieResults;
