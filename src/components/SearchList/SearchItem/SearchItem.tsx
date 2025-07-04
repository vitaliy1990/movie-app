import { memo, useMemo, type FC } from "react";
import type { Movie } from "../../../types";
import { getReleaseYear } from "../../../utils/movies";
import { useGenres } from "../../../hooks/useGenres";

type Props = Movie & {
  handleClick: (value: string) => void;
};

const SearchItem: FC<Props> = ({
  poster_path,
  release_date,
  title,
  handleClick,
  genre_ids,
}) => {
  const { genres } = useGenres();

  const genreNames = useMemo(() => {
    if (!genres) {
      return [];
    }

    const currentGenres = genre_ids.slice(0, 3);

    return currentGenres.map(
      (id) => genres.find((genre) => genre.id === id)?.name
    );
  }, [genre_ids, genres]);

  const releaseYear = getReleaseYear(release_date);

  return (
    <button
      onClick={() => handleClick(title)}
      className="flex gap-4 items-center px-6 py-4 w-full  border-b border-[#f0f0f0] cursor-pointer transition-colors duration-200 ease hover:bg-[#f8f9fe]"
    >
      {poster_path ? (
        <img
          src={import.meta.env.VITE_BASE_IMG_URL + poster_path}
          alt={title}
          className="object-cover w-10 h-[60px] bg-[#e1e5e9] rounded-[5px] shrink-0"
        />
      ) : (
        <div className="flex items-center justify-center w-10 h-[60px] text-xl opacity-20 select-none rounded-[5px] shrink-0">
          🎬
        </div>
      )}
      <div className="flex flex-col gap-1 flex-1 items-start">
        <h4 className="text-[16px] font-bold truncate">{title}</h4>
        <div className="text-[#291f1f] text-sm flex items-center gap-1.5">
          <span>{releaseYear}</span>
          {genreNames.length > 0 && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                {genreNames.join(", ")}
              </span>
            </>
          )}
        </div>
      </div>
    </button>
  );
};

export default memo(SearchItem);
