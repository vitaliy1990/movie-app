import { memo, useMemo, type FC } from 'react';

import { useGenres } from '../../../hooks/useGenres';
import type { Movie } from '../../../types';
import { getReleaseYear } from '../../../utils/movies';

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
      className='ease flex w-full cursor-pointer items-center gap-4 border-b border-[#f0f0f0] px-6 py-4 transition-colors duration-200 hover:bg-[#f8f9fe]'
    >
      {poster_path ? (
        <img
          src={import.meta.env.VITE_BASE_IMG_URL + poster_path}
          alt={title}
          className='h-[60px] w-10 shrink-0 rounded-[5px] bg-[#e1e5e9] object-cover'
        />
      ) : (
        <div className='flex h-[60px] w-10 shrink-0 items-center justify-center rounded-[5px] text-xl opacity-20 select-none'>
          🎬
        </div>
      )}
      <div className='flex flex-1 flex-col items-start gap-1'>
        <h4 className='truncate text-[16px] font-bold'>{title}</h4>
        <div className='flex items-center gap-1.5 text-sm text-[#291f1f]'>
          <span>{releaseYear}</span>
          {genreNames.length > 0 && (
            <>
              <span>•</span>
              <span className='flex items-center gap-1.5'>
                {genreNames.join(', ')}
              </span>
            </>
          )}
        </div>
      </div>
    </button>
  );
};

export default memo(SearchItem);
