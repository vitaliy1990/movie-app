import { memo, type FC } from 'react';

import type { Movie } from '../../types';
import SearchItem from './SearchItem/SearchItem';

type Props = {
  suggestions: Movie[];
  onClick: (value: string) => void;
};

const SearchList: FC<Props> = ({ suggestions, onClick }) => {
  return (
    <>
      {suggestions.map((movie) => (
        <SearchItem
          key={movie.id}
          {...movie}
          handleClick={onClick}
        />
      ))}
    </>
  );
};

export default memo(SearchList);
