import { memo, type FC } from 'react';

import type { HistoryItem as HistoryItemType } from '../../types';
import HistoryItem from './HistoryItem/HistoryItem';

type Props = {
  history: HistoryItemType[];
  onClick: (value: HistoryItemType) => void;
  onClear: () => void;
};

const HistoryList: FC<Props> = ({ history, onClick, onClear }) => {
  return (
    <div className='relative flex flex-col'>
      {history.map((query) => (
        <HistoryItem
          key={query.id}
          id={query.id as string}
          value={query.title}
          handleClick={onClick}
        />
      ))}
      <button
        onClick={onClear}
        className='sticky bottom-0 w-full cursor-pointer self-center border-t border-t-red-300 bg-white p-1 text-sm text-red-500 hover:underline'
      >
        Очистити історію
      </button>
    </div>
  );
};

export default memo(HistoryList);
