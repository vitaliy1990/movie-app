import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <title>404</title>
      <div className='flex h-dvh flex-col items-center justify-center px-4 text-center'>
        <h1 className='mb-4 text-6xl font-bold text-gray-800 dark:text-white'>
          404
        </h1>
        <p className='mb-8 text-xl text-gray-600 dark:text-gray-300'>
          Oops... This page doesn&apos;t exist 😕
        </p>

        <Link
          to='/'
          className='inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-1.5 text-lg text-white transition hover:bg-blue-700'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
