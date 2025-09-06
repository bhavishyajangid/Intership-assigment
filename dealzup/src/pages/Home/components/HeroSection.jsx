// HeroSection.jsx
import Searchbar from "../../../components/Searchbar";
import SearchInDetails from "./SearchInDetails";

const HeroSection = () => {
  return (
    <div className="relative rounded-[34px] w-full max-h-[527px] overflow-visible">
      {/* Background image */}
      <div
        className="w-full h-[527px] max-md:h-[320px] max-lg:h-[400px] max-xl:h-[450px] bg-cover rounded-[34px] bg-[url('/homepageimg.jpg')] bg-[center_13%]"
      ></div>

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center px-4">
        <div className="flex flex-col gap-2 mt-6 px-2">
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold font-poppins text-center text-white leading-snug">
            Find Your Dream Home in One Click!
          </p>
          <p className="text-sm sm:text-base md:text-xl text-[#EEEEEE] text-center">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>

        {/* Searchbar */}
        <div className="absolute bottom-5 sm:top-[65%] md:top-[69%]  w-full   px-6 lg:px-[114px]">
          <Searchbar />
        </div>

        {/* Extra filter details */}
        <SearchInDetails />
      </div>
    </div>
  );
};

export default HeroSection;
