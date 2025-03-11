const FilterMovie = () => {
  return (
    <select name="formFilterTitle" id="filter" className="focus:border-0">
      <option className="bg-black" value="All">
        All
      </option>
      <option className="bg-black" value="Movie">
        Movie
      </option>
      <option className="bg-black" value="Series">
        Series
      </option>
      <option className="bg-black" value="Episode">
        Episode
      </option>
    </select>
  );
};

export default FilterMovie;
