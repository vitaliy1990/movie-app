import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import type { Option } from '../../../types';
import { cn } from '../../../utils/styles';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  options: Option[];
  register: UseFormRegister<T>;
  rootClassName?: string;
};

const CheckboxGroup = <T extends FieldValues>({
  name,
  label,
  options,
  register,
  rootClassName = '',
}: Props<T>) => (
  <div className={cn('flex flex-col gap-2', rootClassName)}>
    {label && <p className='filter-label'>{label}</p>}
    {options.map((option) => (
      <label
        key={option.value}
        className='flex cursor-pointer items-center gap-2 font-normal select-none'
      >
        <input
          type='checkbox'
          value={option.value}
          {...register(name)}
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default CheckboxGroup;
