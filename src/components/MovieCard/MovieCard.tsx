import { memo, type FC } from "react";
import type { Movie } from "../../types";
import Poster from "../Poster/Poster";
import { getReleaseYear } from "../../utils/movies";
import TagMovieList from "../TagMovieList/TagMovieList";

const MovieCard: FC<Movie> = ({
  poster_path,
  title,
  overview,
  vote_average,
  release_date,
  genre_ids,
}) => {
  const releaseYear = getReleaseYear(release_date);

  return (
    <div className="movie-card hover:shadow-lg hover:-translate-y-1 transition-transform cursor-pointer ">
      <Poster posterPath={poster_path} title={title} vote={vote_average} />
      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-[#333] leading-[1.3] truncate">
            {title}
          </h3>
          <div className="text-[#764ba2] font-medium">{releaseYear}</div>
        </div>
        <p className="text-[#666] text-[0.95rem] leading-[1.5] line-clamp-3">
          {overview}
        </p>
        <TagMovieList genreIds={genre_ids} />
      </div>
    </div>
  );
};

export default memo(MovieCard);
