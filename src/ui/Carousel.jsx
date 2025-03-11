import { useEffect, useState } from "react";

const Carousel = () => {
  const carouselData = [
    {
      text: "love",
      image: "/images/carousel/love.jpg",
    },
    {
      text: "war",
      image: "/images/carousel/war.jpg",
    },
    {
      text: "friendship",
      image: "/images/carousel/friendship.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselData.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  const progressPercentage = 100 / carouselData.length;
  return (
    <>
      <div className="carouselProgress relative h-1/2 w-[5%] flex justify-center items-center">
        <div
          className={`absolute h-1/3 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500 transition-all duration-500`}
          style={{ top: `${activeIndex * progressPercentage}%` }}
        ></div>
      </div>
      <div className="carouselElementContainer relative h-full w-[95%] flex justify-end items-center ">
        <div
          style={{
            backgroundImage: `url(${carouselData[activeIndex].image})`,
          }}
          className={`carouselMini absolute flex flex-col px-4 py-2 rounded-md left-15 bg-black/30 w-50 bg-cover bg-center bg-blend-soft-light`}
        >
          <h2 className="carouselSubheading font-Monty leading-5 mt-2">
            Cinema is
          </h2>
          <h1 className="carouselTitle text-6xl font-Cinzel italic uppercase font-bold">
            {carouselData[activeIndex].text}
          </h1>
        </div>
        <img
          src={carouselData[activeIndex].image}
          alt={`${carouselData[activeIndex].text}.jpg`}
          className="carouselPoster h-full w-[90%] rounded-l-4xl"
        />
      </div>
    </>
  );
};

export default Carousel;
