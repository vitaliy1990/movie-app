import { useMemo } from "react";
import { createRange } from "../utils/pagination";

type Props = {
  currentPage: number;
  totalPages: number;
  pageButtonCount?: number;
};

export const usePagination = ({
  currentPage,
  totalPages,
  pageButtonCount = 5,
}: Props) => {
  const paginationRange = useMemo(() => {
    if (totalPages <= pageButtonCount) {
      return createRange(1, totalPages);
    }

    const startPage =
      Math.floor((currentPage - 1) / pageButtonCount) * pageButtonCount + 1;
    const endPage = Math.min(startPage + pageButtonCount - 1, totalPages);

    return createRange(startPage, endPage);
  }, [currentPage, totalPages, pageButtonCount]);

  return paginationRange;
};
