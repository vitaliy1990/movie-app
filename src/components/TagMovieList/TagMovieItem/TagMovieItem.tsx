import { memo, type FC } from 'react';

import { useGenres } from '../../../hooks/useGenres';
import { cn } from '../../../utils/styles';

type Props = {
  tagId: number;
  className?: string;
};

const TagMovieItem: FC<Props> = ({ tagId, className = '' }) => {
  const { genres } = useGenres();
  const tagName = genres?.find((item) => item.id === tagId)?.name;

  return (
    <div
      className={cn(
        'rounded-[20px] bg-[rgba(118,75,162,0.1)] px-3 py-1 text-[0.85rem] font-medium text-[#764ba2]',
        className
      )}
    >
      {tagName}
    </div>
  );
};

export default memo(TagMovieItem);
