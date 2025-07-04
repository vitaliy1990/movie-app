import { useEffect } from "react";
import Section from "../Section/Section";
import SearchBar from "../SearchBar/SearchBar";
import FilterPanel from "../FilterPanel/FilterPanel";
import { FormProvider, useForm } from "react-hook-form";
import { useMoviesFilter } from "../../hooks/useMoviesFilter";
import type { MoviesFilter } from "../../types";
import { useDebounceFilter } from "../../hooks/useDebounceFilter";
import { defaultValueFilter } from "../../const";

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
      <Section className="z-50">
        <SearchBar />
        <hr className="text-[#e1e5e9]" />
        <FilterPanel />
      </Section>
    </FormProvider>
  );
};

export default SearchSection;
