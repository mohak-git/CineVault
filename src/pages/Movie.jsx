import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import StoreDefaultMovies from "../services/StoreDefaultMovies";
import Loader from "../ui/Loader";

const Movie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const displayDefaultMovies = async () => {
    const defaultMoviesData = await StoreDefaultMovies();
    setMovies(defaultMoviesData);
    setIsLoading(false);
  };

  useEffect(() => {
    displayDefaultMovies();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="moviePageContainer bg-black w-screen text-white flex flex-col justify-between items-center gap-[5vh] py-[5vh]">
      <div className="movieFormContainer  w-4/5 h-[10vh] overflow-hidden">
        <MovieForm setMovies={setMovies} />
      </div>
      <ul className="moviesContainer min-h-[75vh] justify-items-center content-between gap-10 w-4/5 grid grid-cols-4 hover:*:not-hover:saturate-50 hover:*:not-hover:opacity-50 hover:*:hover:z-1 hover:*:hover:scale-125 *:transition-all *:duration-500">
        {movies.map((el) => (
          <MovieCard key={el.imdbID} movieData={el} />
        ))}
      </ul>
    </div>
  );
};

export default Movie;
