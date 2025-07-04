import { useCallback, useState } from 'react';

import { useFormContext } from 'react-hook-form';

import { useAutocomplete } from '../../hooks/useAutocomplete';
import { useSearchHistory } from '../../hooks/useSearchHistory';
import Input from '../Fields/Input/Input';
import Loader from '../Loader/Loader';
import SearchDropdown from '../SearchDropdown/SearchDropdown';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { register, watch, setValue, reset } = useFormContext();
  const searchValue = watch('query');

  const { history, addQuery, clearHistory } = useSearchHistory();
  const { results: suggestions, loading } = useAutocomplete(
    isFocused ? searchValue : ''
  );

  const handleClick = useCallback(
    (value: string) => {
      reset();
      addQuery(value);
      setValue('query', value);
    },
    [reset, addQuery, setValue]
  );

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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        {loading && (
          <Loader
            rootClassName='absolute right-1 bottom-1/2 translate-y-1/2 p-0 z-100'
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
