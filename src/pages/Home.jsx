import Carousel from "../ui/Carousel";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="homePageContainer bg-black text-white w-screen h-[190vh] flex flex-col items-center justify-evenly">
      <div className="heroContainer h-[68vh] w-4/5 flex justify-center items-center gap-2">
        <Hero />
      </div>
      <div className="carouselContainer h-screen w-screen flex items-center">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
