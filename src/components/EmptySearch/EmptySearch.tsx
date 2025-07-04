const EmptySearch = () => {
  return (
    <div className="flex flex-col items-center px-8 py-16 text-[#666] gap-4 text-center ">
      <h3 className="text-2xl font-semibold text-[#333]">No movies found</h3>
      <p className="text-[1.1rem] max-w-[400px] leading-[1.6]">
        Try searching with different keywords or check your spelling.
      </p>
    </div>
  );
};

export default EmptySearch;
