import { useFormContext } from 'react-hook-form';

import { languageOptions, regionOptions } from '../../const';
import Checkbox from '../Fields/Checkbox/Checkbox';
import Input from '../Fields/Input/Input';
import Select from '../Fields/Select/Select';

const FilterForm = () => {
  const { register } = useFormContext();

  return (
    <form className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
      <Select
        label='Language'
        name='language'
        register={register}
        options={languageOptions}
      />
      <Input
        label='Release Year'
        name='primary_release_year'
        register={register}
        type='number'
        min={1900}
        max={2030}
        placeholder='e.g. 2024'
      />
      <Input
        label='Year'
        name='year'
        register={register}
        type='number'
        min={1900}
        max={2030}
        placeholder='e.g. 2024'
      />
      <Select
        label='Region'
        name='region'
        register={register}
        options={regionOptions}
      />
      <Input
        label='Page'
        name='page'
        register={register}
        type='number'
        min={1}
        max={1000}
        placeholder='1'
      />
      <div className='filter-field'>
        <p className='filter-label'>Content Filter</p>
        <Checkbox
          label='Include Adult Content'
          name='include_adult'
          register={register}
        />
      </div>
    </form>
  );
};

export default FilterForm;
