import { useState } from 'react';

import { cn } from '../../utils/styles';
import FilterForm from '../FilterForm/FilterForm';

const FilterPanel = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-4'>
      <button
        className='ease flex cursor-pointer items-center gap-2 font-semibold text-[#764ba2] transition-colors delay-300 hover:text-[#5a3a7a]'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={cn('ease flex size-5 transition-transform delay-100', {
            'rotate-180': isOpen,
          })}
        >
          🔽
        </span>
        {isOpen ? 'Hide Advanced Options' : 'Advanced Search Options'}
      </button>
      {isOpen && <FilterForm />}
    </div>
  );
};

export default FilterPanel;
