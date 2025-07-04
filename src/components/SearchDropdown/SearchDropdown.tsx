import { memo, type FC } from "react";
import type { Movie } from "../../types";
import HistoryList from "../HistoryList/HistoryList";
import SearchList from "../SearchList/SearchList";

type Props = {
  showSuggestions: boolean;
  showHistory: boolean;
  suggestions: Movie[];
  history: string[];
  onClick: (value: string) => void;
  onClear: () => void;
};

const SearchDropdown: FC<Props> = ({
  showSuggestions,
  showHistory,
  suggestions,
  history,
  onClick,
  onClear,
}) => {
  if (!showSuggestions && !showHistory) return null;

  const renderSearchList = () => {
    if (showSuggestions) {
      return <SearchList onClick={onClick} suggestions={suggestions} />;
    }

    return (
      <HistoryList history={history} onClear={onClear} onClick={onClick} />
    );
  };

  return (
    <div className="absolute top-full w-full bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.15)] max-h-80 overflow-y-auto z-50 mt-2 border-[rgba(118,75,162,0.2)]">
      {renderSearchList()}
    </div>
  );
};

export default memo(SearchDropdown);
