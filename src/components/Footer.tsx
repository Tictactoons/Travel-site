import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import appstore from "/public/appstore.png";
import playstore from "/public/playstore.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white py-10 px-20 md:px-28 max-w-[1200px] mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-4 md:items-start items-center">
      
        <div className="flex flex-col items-center md:items-start">   
          <h2 className="text-2xl font-bold text-[#181E4B] mb-3 ">Isaiah</h2>
          <p className="text-xs font-light font-poppins text-[#5E6282] text-center md:text-left">
            Your trusted partner for unforgettable travel experiences and
            adventures around the world.
          </p>
        </div>

        
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold font-poppins text-normal mb-3 text-[#181E4B]">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>    
          </ul>
        </div>

         <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold font-poppins text-normal mb-3 text-[#181E4B]">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold font-poppins text-normal mb-3 text-[#181E4B]">
            More
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        
        <div className="flex flex-col lg:flex-col md:flex-row md:gap-8 lg:gap-4 md:w-[450px] lg:w-full md:justify-between  items-center pt-6 md:pt-0">
          <div className="flex gap-4 text-[#181E4B] text-lg">
            <FaFacebookF className="cursor-pointer hover:text-[#5E3BE1]" />
            <FaTwitter className="cursor-pointer hover:text-[#5E3BE1]" />
            <FaInstagram className="cursor-pointer hover:text-[#5E3BE1]" />
          </div>
          
          <h3 className="text-sm font-light font-poppins text-[#5E6282] mb-3 mt-3 md:mt-0 md:mb-0">
            Discover Our App
          </h3>
          <div className="flex gap-3 mb-4 md:mt-0 md:mb-0 items-center justify-center">
            <img
              src={appstore}
              alt="App Store"
              className="w-16 cursor-pointer"
            />
            <img
              src={playstore}
              alt="Play Store"
              className="w-16 cursor-pointer"
            />
          </div>
        </div>
      </div>

      
      <div className="mt-10 text-center text-xs font-light font-poppins text-[#5E6282] pt-4">
        © {year} TravelGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
