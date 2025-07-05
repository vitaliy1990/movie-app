import { type FC, type ReactNode } from 'react';

import { cn } from '../../../utils/styles';

type Props = {
  label: string;
  value?: string | number | null;
  rootClassName?: string;
  children?: ReactNode;
};

const MovieDetailsItem: FC<Props> = ({
  label,
  value,
  rootClassName = '',
  children,
}) => {
  if (!value && !children) return null;

  return (
    <div className={cn('flex items-start gap-1 text-sm', rootClassName)}>
      <strong className='mr-1 text-base'>{label}: </strong>
      <span className='text-base'>{children || value}</span>
    </div>
  );
};

export default MovieDetailsItem;
