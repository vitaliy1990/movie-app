import { useEffect } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { defaultValueFilter } from '../../const';
import { useDebounceFilter } from '../../hooks/useDebounceFilter';
import { useMoviesFilter } from '../../hooks/useMoviesFilter';
import type { MoviesFilter } from '../../types';
import FilterPanel from '../FilterPanel/FilterPanel';
import SearchBar from '../SearchBar/SearchBar';
import Section from '../Section/Section';

const SearchSection = () => {
  const { setFilter, filters } = useMoviesFilter();

  const methods = useForm<MoviesFilter>({
    defaultValues: {
      ...defaultValueFilter,
      ...filters,
    },
  });

  const watchedValues = methods.watch();
  const debouncedValues = useDebounceFilter(watchedValues, 500);

  useEffect(() => {
    if (debouncedValues) {
      setFilter(debouncedValues);
    }
  }, [debouncedValues]);

  return (
    <FormProvider {...methods}>
      <Section className='z-50'>
        <SearchBar />
        <hr className='text-[#e1e5e9]' />
        <FilterPanel />
      </Section>
    </FormProvider>
  );
};

export default SearchSection;
