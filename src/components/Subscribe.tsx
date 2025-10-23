import {
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";

const Subscribe = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 md:px-6 bg-[#DFD7F9]/20 md:w-[70%] w-full max-w-[310px]  md:max-w-[1200px] mx-auto rounded-2xl rounded-tl-[100px] relative mb-20">
      <img
        src="/public/Mask1.png"
        alt=""
        className="absolute overflow-hidden bottom-0 left-[-70px] h-[270px] opacity-4"
      />
      <img
        src="/public/Mask2.png"
        alt=""
        className="absolute overflow-hidden top-0 right-0 h-[270px] opacity-4"
      />

      <div className="h-14 w-14 bg-gradient-to-r from-[#747DEF] to-[#5E3BE1] rounded-full absolute top-0 right-0 mt-[-18px] mr-[-20px] flex justify-center items-center text-2xl text-[#fff]">
        <FaLocationArrow />
      </div>

      <h2 className="text-md md:text-xl font-poppins font-semibold text-center mb-6 max-w-[60%] text-[#5E6282]">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h2>

      <div className="flex md:gap-6 items-center md:flex-row flex-col gap-3">
        <div className="flex items-center bg-white  rounded-lg overflow-hidden w-full max-w-md px-12  py-4 pl-6">
          <FaEnvelope className="text-gray-500 mr-2 text-sm" />
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400 font-light  text-xs font-poppins w-40"
          />
        </div>

        <div>
          <button className="bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white font-light text-xs md:px-7 px-24 py-3.5 rounded-lg transition-all duration-200 hover:shadow-sm hover:border-none hover:px-8 hover:py-4">
            Subscribe
          </button>
        </div>
      </div>

      <img
        src="/public/plus.png"
        alt=""
        className="absolute bottom-[-60px] right-[-90px] z-0"
      />
    </section>
  );
};

export default Subscribe;
