import type { FC } from 'react';

import { cn } from '../../utils/styles';

type Props = {
  message?: string;
  title?: string;
  rootClassName?: string;
};

const ErrorMessage: FC<Props> = ({
  message = 'Something went wrong. Please try again later.',
  title = 'Error',
  rootClassName = '',
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4 py-10 text-center',
        rootClassName
      )}
    >
      <h2 className='text-2xl font-semibold text-red-500 md:text-4xl'>
        {title}
      </h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
