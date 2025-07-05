import { memo, type FC } from 'react';

import { Link } from 'react-router-dom';

import type { HistoryItem } from '../../../types';

type Props = {
  value: string;
  id: string;
  handleClick: (value: HistoryItem) => void;
};

const HistoryItem: FC<Props> = ({ handleClick, value, id }) => {
  const handleMouseDown = () => handleClick({ title: value, id });
  return (
    <Link
      to={`/movies/${id}`}
      replace
      onMouseDown={handleMouseDown}
      className='w-full cursor-pointer border-b border-[#f0f0f0] px-6 py-4 text-left hover:bg-[#f8f9fe]'
    >
      {value}
    </Link>
  );
};

export default memo(HistoryItem);
