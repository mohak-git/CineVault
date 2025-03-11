import { IoMdStar, IoIosTime } from "react-icons/io";

const MovieCard = ({ movieData }) => {
  const { Poster, Title, imdbRating, Runtime, Year, imdbVotes } = movieData;

  const generateColorFromMovieData = () => {
    const rating = parseFloat(imdbRating) || 0;
    const runtime = parseInt(Runtime.split(" ")[0]) || 0;
    const year = parseInt(Year) || 0;
    const votes = parseInt(imdbVotes.replace(/,/g, "")) || 0;

    const red = Math.min(255, Math.floor((rating / 10) * 255));
    const green = Math.min(255, (year % 100) * 2);
    const blue = Math.min(255, Math.floor((runtime / 500) * 255));

    const randomFactor = (votes % 100) + Math.floor(Math.random() * 256);
    const finalRed = (red + randomFactor) % 256;
    const finalGreen = (green + randomFactor) % 256;
    const finalBlue = (blue + randomFactor) % 256;

    return `rgb(${finalRed},${finalGreen},${finalBlue})`;
  };

  const randomBGColor = generateColorFromMovieData(movieData);

  return (
    <div className="movieCardContainer relative h-68 w-54 overflow-hidden">
      <img
        src={Poster != "N/A" ? Poster : `/images/dummy.jpg`}
        alt={`${Title}.jpg`}
        className="movieCardPoster absolute rounded-md w-50 h-54 left-2 overflow-hidden object-cover"
      />
      <div
        // style={{
        //   background: `linear-gradient(180deg, rgb(0,0,0) 0%, ${randomBGColor} 100%)`,
        // }}
        className={`movieCardDetails font-Quest bg-gradient-to-t from-purple-800 w-full h-60 mt-8 px-3 pt-46 rounded-md`}
      >
        <h2 className="movieCardTitle text-xl truncate">{Title}</h2>
        <div className="movieCardStats flex justify-between text-xs">
          <div className="movieCardRating flex justify-center items-center leading-1 gap-0.5 bg-black/30  py-0.5 px-1 rounded-md">
            <IoMdStar className="text-yellow-500" />
            <span>{imdbRating}/10</span>
          </div>
          <div className="movieCardDuration flex justify-center items-center leading-1 gap-0.5 bg-white/30 text-black py-0.5 px-1 rounded-md">
            <IoIosTime className="text-blue-500" />
            <span>{Runtime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
