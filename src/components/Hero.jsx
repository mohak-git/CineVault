const Hero = () => {
  return (
    <>
      <div className="heroLeft h-2/3 w-1/3 flex flex-col justify-center p-4">
        <h1 className="heroTitle text-4xl font-Cinzel font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
        <h2 className="heroContent font-Lustria leading-5 mt-2 w-70">
          Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Reiciendis,
          repellat?
        </h2>
        <button className="heroButton border-1 mt-10 w-fit px-6 py-3 rounded-sm cursor-pointer text-xs after:content-['→'] after:ml-1">
          Explore
        </button>
      </div>
      <div className="heroRight h-full w-2/3 overflow-hidden rounded-4xl">
        <img
          src="/images/heroPoster.jpg"
          alt=""
          className="heroPoster h-full object-cover not-hover:opacity-70 hover:contrast-125 hover:brightness-80 hover:saturate-200 hover:scale-105 hover:rotate-z-1 transition-all duration-500"
        />
      </div>
    </>
  );
};

export default Hero;