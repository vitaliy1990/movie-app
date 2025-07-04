const LoadingSkeleton = () => {
  const renderSkeleton = () =>
    Array(6)
      .fill('')
      .map((_, index) => (
        <div
          key={index}
          className='movies-grid'
        >
          <div className='movie-card'>
            <div className='skeleton-poster' />
            <div className='flex flex-col gap-4 p-6'>
              <div className='skeleton-line w-4/5' />
              <div className='skeleton-line h-4 w-2/6' />
              <div className='skeleton-line w-full' />
              <div className='skeleton-line w-full' />
              <div className='skeleton-line w-full' />
            </div>
          </div>
        </div>
      ));

  return <>{renderSkeleton()}</>;
};

export default LoadingSkeleton;
