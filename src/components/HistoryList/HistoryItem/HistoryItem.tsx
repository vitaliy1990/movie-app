import { memo, type FC } from "react";

type Props = {
  value: string;
  handleClick: (value: string) => void;
};

const HistoryItem: FC<Props> = ({ handleClick, value }) => {
  return (
    <button
      onClick={() => handleClick(value)}
      className="px-6 py-4 border-b border-[#f0f0f0] hover:bg-[#f8f9fe] text-left w-full cursor-pointer"
    >
      {value}
    </button>
  );
};

export default memo(HistoryItem);
