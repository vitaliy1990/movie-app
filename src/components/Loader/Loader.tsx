import type { FC } from 'react';

import { cn } from '../../utils/styles';

type Props = {
  infoText?: string;
  rootClassName?: string;
  loaderClassName?: string;
};

const Loader: FC<Props> = ({
  infoText,
  rootClassName = '',
  loaderClassName = '',
}) => {
  return (
    <div
      className={cn(
        'w-ful flex flex-col items-center justify-center gap-4 p-12 text-[#666]',
        rootClassName
      )}
    >
      <div
        className={cn(
          'size-10 animate-spin rounded-full border-4 border-[#f0f0f0] border-t-[#764ba2]',
          loaderClassName
        )}
      />
      {infoText && <p>{infoText}</p>}
    </div>
  );
};

export default Loader;
