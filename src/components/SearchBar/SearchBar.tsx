import { useCallback, useEffect, useRef, useState } from 'react';

import { useFormContext } from 'react-hook-form';

import { useAutocomplete } from '../../hooks/useAutocomplete';
import { useSearchHistory } from '../../hooks/useSearchHistory';
import type { HistoryItem } from '../../types';
import Input from '../Fields/Input/Input';
import Loader from '../Loader/Loader';
import SearchDropdown from '../SearchDropdown/SearchDropdown';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const blurTimeoutRef = useRef<null | number>(null);

  const { register, watch, setValue } = useFormContext();
  const searchValue = watch('query');
  const pageValue = watch('page');

  const { history, addQuery, clearHistory } = useSearchHistory();
  const { results: suggestions, loading } = useAutocomplete(
    isFocused ? searchValue : ''
  );

  useEffect(() => {
    /*  Reset page only when searchValue changes  */
    if (pageValue !== '1') {
      setValue('page', '1');
    }

    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, [searchValue]);

  const handleClick = useCallback(
    (item: HistoryItem) => {
      addQuery(item);
    },
    [addQuery]
  );

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => setIsFocused(false), 200);
  };

  const handleFocus = () => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
    setIsFocused(true);
  };

  const showSuggestions = searchValue && isFocused && suggestions.length > 0;
  const showHistory = isFocused && !searchValue && history.length > 0;

  return (
    <div className='relative z-50 mx-auto w-full max-w-[600px] items-center'>
      <div className='relative'>
        <Input
          name='query'
          register={register}
          inputClassName='relative w-full px-6 py-4 text-[1.1rem] border-2 border-[#e1e5e9] rounded-2xl transition-all duration-300 ease bg-white z-50'
          placeholder='Search for movies...'
          autoComplete='off'
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {loading && (
          <Loader
            rootClassName='absolute right-1 bottom-1/2 translate-y-1/2 p-0 z-100 w-auto'
            loaderClassName='size-6'
          />
        )}
      </div>

      <SearchDropdown
        showSuggestions={showSuggestions}
        showHistory={showHistory}
        suggestions={suggestions}
        history={history}
        onClick={handleClick}
        onClear={clearHistory}
      />
    </div>
  );
};

export default SearchBar;
