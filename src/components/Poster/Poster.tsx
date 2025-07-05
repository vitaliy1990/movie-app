import type { FC } from 'react';

import { cn } from '../../utils/styles';

type Props = {
  posterPath: string | null;
  vote: number;
  title: string;
  rootClassName?: string;
};

const Poster: FC<Props> = ({ posterPath, title, vote, rootClassName = '' }) => {
  const renderImg = () => {
    if (posterPath) {
      const imgPath = import.meta.env.VITE_BASE_IMG_URL + posterPath;

      return (
        <img
          src={imgPath}
          alt={title}
          className='h-full w-full object-cover'
        />
      );
    }

    return (
      <div className='flex h-full items-center justify-center text-6xl opacity-20 select-none'>
        🎬
      </div>
    );
  };

  return (
    <div
      className={cn(
        'relative h-96 bg-gradient-to-tr from-gray-200 to-gray-100',
        rootClassName
      )}
    >
      {renderImg()}
      <div className='absolute top-2.5 right-2.5 flex items-center justify-center rounded-[10px] bg-[rgba(118,75,162,0.9)] p-2 text-[0.9rem] font-semibold text-white'>
        {vote.toFixed(1)}
      </div>
    </div>
  );
};

export default Poster;
