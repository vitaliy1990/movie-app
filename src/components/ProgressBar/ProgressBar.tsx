import { type FC } from "react";

type Props = {
  isLoading: boolean;
};
const ProgressBar: FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="w-full h-1 rounded overflow-hidden bg-white/30">
      <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 animate-progress" />
    </div>
  );
};

export default ProgressBar;
