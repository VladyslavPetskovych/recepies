import fon from "/background.jpg";

function Hero() {
  return (
    <div className=" h-screen flex relative ">
      <img className="w-full h-full object-cover  absolute" src={fon} alt="" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="bg-black bg-opacity-30 px-4 py-2 rounded-md font-averta font-extrabold text-5xl text-white">
          Find best recipes
        </p>
      </div>
    </div>
  );
}

export default Hero;
