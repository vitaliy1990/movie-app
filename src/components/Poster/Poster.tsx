import type { FC } from "react";

type Props = {
  posterPath: string | null;
  vote: number;
  title: string;
};

const Poster: FC<Props> = ({ posterPath, title, vote }) => {
  const renderImg = () => {
    if (posterPath) {
      const imgPath = import.meta.env.VITE_BASE_IMG_URL + posterPath;

      return (
        <img src={imgPath} alt={title} className="object-cover w-full h-full" />
      );
    }

    return (
      <div className="flex items-center justify-center h-full text-6xl opacity-20 select-none">
        🎬
      </div>
    );
  };

  return (
    <div className="relative h-96 bg-gradient-to-tr from-gray-200 to-gray-100">
      {renderImg()}
      <div className="absolute top-2.5 right-2.5 bg-[rgba(118,75,162,0.9)] text-white p-2 rounded-[10px] font-semibold text-[0.9rem] flex items-center justify-center">
        {vote.toFixed(1)}
      </div>
    </div>
  );
};

export default Poster;
