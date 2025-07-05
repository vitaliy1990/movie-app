import { type FC } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { useMoviesFilter } from '../../hooks/useMoviesFilter';
import { usePagination } from '../../hooks/usePagination';
import type { MoviesFilter, Pagination as PaginationType } from '../../types/';
import { cn } from '../../utils/styles';

type Props = PaginationType & {
  classNames?: string;
};

const Pagination: FC<Props> = ({
  totalPages,
  classNames,
  currentPage,
  pageButtonCount = 8,
}) => {
  const { setFilter, filters } = useMoviesFilter();

  const paginationRange = usePagination({
    currentPage,
    totalPages,
    pageButtonCount,
  });

  if (totalPages <= 1 || !totalPages) {
    return null;
  }

  const handleClickPage = async (page: number) => {
    setFilter({
      ...filters,
      page: page.toString(),
    } as MoviesFilter);
  };

  const createPagesList = () => {
    if (totalPages <= pageButtonCount) {
      return paginationRange?.map((page: number, index: number) => (
        <button
          onClick={() => handleClickPage(page)}
          key={index}
          className={cn('hover:underline', {
            'text-base font-semibold text-[lightseagreen]':
              page === currentPage,
          })}
        >
          {page}
        </button>
      ));
    }

    const prevRange = paginationRange[0] - 1;
    const nextRange = paginationRange[paginationRange.length - 1] + 1;

    return (
      <>
        <button
          disabled={currentPage <= pageButtonCount}
          className='disabled:opacity-30'
          onClick={() => handleClickPage(prevRange)}
        >
          <ChevronLeftIcon className='size-6 rounded-md border border-[#764ba2]/35 text-[#764ba2]' />
        </button>
        {paginationRange?.map((page: number, index: number) => (
          <button
            onClick={() => handleClickPage(page)}
            className={cn('!cursor-pointer hover:underline', {
              'text-base font-semibold text-[#764ba2]': page === currentPage,
            })}
            key={index}
          >
            {page}
          </button>
        ))}
        <button
          disabled={paginationRange.includes(totalPages)}
          onClick={() => handleClickPage(nextRange)}
          className='disabled:opacity-30'
        >
          <ChevronRightIcon className='size-6 rounded-md border border-[#764ba2]/35 text-[#764ba2]' />
        </button>
      </>
    );
  };

  const rootClassName = cn(
    'flex flex-row items-center justify-center gap-2',
    classNames
  );

  return <div className={rootClassName}>{createPagesList()}</div>;
};

export default Pagination;
