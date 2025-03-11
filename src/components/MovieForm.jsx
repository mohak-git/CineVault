import { useState } from "react";
import SearchMovie from "../ui/SearchMovie";
import SortMovie from "../ui/SortMovie";
import FilterMovie from "../ui/FilterMovie";
import { getIDs } from "../services/GetAPIData";

const MovieForm = ({ setMovies }) => {
  const [userInput, setUserInput] = useState("");

  const finalData = async () => {
    const fetchedData = await getIDs(userInput);
    setMovies(fetchedData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (userInput != "") {
      finalData();
    }
  };

  return (
    <form
      className="movieForm font-Quest h-full w-full px-4 flex justify-between items-center"
      onSubmit={handleOnSubmit}
    >
      <SearchMovie input={userInput} setInput={setUserInput} />
      <SortMovie />
      <FilterMovie />
    </form>
  );
};

export default MovieForm;
