const EmptySearch = () => {
  return (
    <div className='flex flex-col items-center gap-4 px-8 py-16 text-center text-[#666]'>
      <h3 className='text-2xl font-semibold text-[#333]'>No movies found</h3>
      <p className='max-w-[400px] text-[1.1rem] leading-[1.6]'>
        Try searching with different keywords or check your spelling.
      </p>
    </div>
  );
};

export default EmptySearch;
