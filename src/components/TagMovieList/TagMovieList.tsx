import { memo, type FC } from "react";
import TagMovieItem from "./TagMovieItem/TagMovieItem";

type Props = {
  genreIds: number[];
};

const TagMovieList: FC<Props> = ({ genreIds }) => {
  return (
    <div className="flex flex-wrap gap-2 line-clamp-2">
      {genreIds.map((item: number) => (
        <TagMovieItem key={item} tagId={item} />
      ))}
    </div>
  );
};

export default memo(TagMovieList);
