import { memo, type FC } from "react";
import HistoryItem from "./HistoryItem/HistoryItem";

type Props = {
  history: string[];
  onClick: (value: string) => void;
  onClear: () => void;
};

const HistoryList: FC<Props> = ({ history, onClick, onClear }) => {
  return (
    <div className="relative flex flex-col">
      {history.map((query) => (
        <HistoryItem key={query} value={query} handleClick={onClick} />
      ))}
      <button
        onClick={onClear}
        className="sticky bottom-0 border-t border-t-red-300 text-sm text-red-500 p-1 w-full self-center hover:underline cursor-pointer bg-white"
      >
        Очистити історію
      </button>
    </div>
  );
};

export default memo(HistoryList);
