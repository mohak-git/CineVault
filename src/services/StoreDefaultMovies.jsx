import GetAPIData from "./GetAPIData";

const StoreDefaultMovies = async () => {
  const initialMoviesIDs = [
    "tt5311514",
    "tt1375666",
    "tt0468569",
    "tt0095327",
    "tt20850406",
    "tt1187043",
    "tt4574334",
    "tt7366338",
    "tt2543164",
    "tt3322312",
  ];

  return GetAPIData(initialMoviesIDs);
};

export default StoreDefaultMovies;
