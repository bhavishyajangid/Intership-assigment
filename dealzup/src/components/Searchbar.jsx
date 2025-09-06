// Searchbar.jsx
const Searchbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
      {/* Input box */}
      <div className="flex items-center justify-between md:w-[500px] w-full lg:w-full max-w-[600px] h-[50px] md:h-[60px] bg-white rounded-xl px-4 md:px-6">
        <div className="flex gap-2 md:gap-3 items-center w-full">
          <img className="w-5 h-5 md:w-[34px] md:h-[34px]" src="../../public/location.png" alt="location" />
          <input
            className="w-full placeholder:text-sm md:placeholder:text-xl placeholder:text-[#979797] outline-none"
            type="text"
            placeholder="Search Location..."
          />
        </div>
        <img className="w-5 h-5 md:w-[34px] md:h-[26px]" src="../../public/searchlogo.png" alt="logo" />
      </div>

      {/* Button */}
      <span className="w-full md:w-[194px] h-[45px] md:h-[47px] flex justify-center items-center bg-white text-[#1E3A8A] text-base md:text-lg border-2 border-[#1E3A8A] px-4 md:px-5 py-2 rounded-3xl max-md:hidden">
        List Your Property
      </span>
    </div>
  );
};

export default Searchbar;
