import { memo, type FC } from 'react';

import type { Genre } from '../../types';
import TagMovieItem from './TagMovieItem/TagMovieItem';
import { isNumber } from '../../utils/types';

type Props = {
  genreIds: Array<number | Genre>;
  title?: string;
};

const TagMovieList: FC<Props> = ({ genreIds, title }) => {
  return (
    <div className='line-clamp-2 flex flex-wrap items-center gap-1'>
      {title && <strong className='mr-1'>Genres: </strong>}
      {genreIds.map((item) => {
        const id = isNumber(item) ? item : (item as Genre).id;
        return (
          <TagMovieItem
            key={id}
            tagId={id}
          />
        );
      })}
    </div>
  );
};

export default memo(TagMovieList);
