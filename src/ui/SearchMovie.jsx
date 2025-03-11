const SearchMovie = ({ input, setInput }) => {
  return (
    <input
      type="text"
      name="formSearchTitle"
      placeholder="Search Movie..."
      className="formSearchTitle h-1/3 w-1/4 not-focus:bg-white/30 rounded-lg focus:bg-gradient-to-r from-cyan-500 to-white/30 px-2 leading-1 outline-0 transition-all duration-250 not-focus:shadow-[0px_0px_5px_1px_rgba(255,255,255,0.8)]"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default SearchMovie;
