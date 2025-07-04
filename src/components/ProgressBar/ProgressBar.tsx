import { type FC } from 'react';

type Props = {
  isLoading: boolean;
};
const ProgressBar: FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className='h-1 w-full overflow-hidden rounded bg-white/30'>
      <div className='animate-progress h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700' />
    </div>
  );
};

export default ProgressBar;
