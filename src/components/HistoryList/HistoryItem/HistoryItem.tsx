import { memo, type FC } from 'react';

type Props = {
  value: string;
  handleClick: (value: string) => void;
};

const HistoryItem: FC<Props> = ({ handleClick, value }) => {
  return (
    <button
      onClick={() => handleClick(value)}
      className='w-full cursor-pointer border-b border-[#f0f0f0] px-6 py-4 text-left hover:bg-[#f8f9fe]'
    >
      {value}
    </button>
  );
};

export default memo(HistoryItem);
