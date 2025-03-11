const SortMovie = () => {
  return (
    <div className="formSort w-1/4 flex gap-4 justify-center items-center">
      <span className=" h-full text-lg after:content-['_↑↓'] after:text-cyan-500">
        Sort
      </span>
      <label htmlFor="formSortAscending" className="h-full flex gap-1 ml-2">
        <input
          type="radio"
          name="formSort"
          id="formSortAscending"
          className="accent-cyan-500"
        />
        Ascending
      </label>
      <label htmlFor="formSortDescending" className="h-full flex gap-1">
        <input
          type="radio"
          name="formSort"
          id="formSortDescending"
          className="accent-cyan-500"
        />
        Descending
      </label>
    </div>
  );
};

export default SortMovie;
