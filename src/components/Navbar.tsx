import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for open/close

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 sm:w-[90%] md:w-[80%] lg:w-[70%] max-w-[1200px] mx-auto relative">
      <div>
        <h1
          className="text-2xl font-bold tracking-tighter font-opensans"
          style={{ color: "#212832" }}
        >
          Isaiah
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-poppins text-xs font-light justify-center items-center text-[#212832]">
        <li>
          <a
            href=""
            className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-normal"
          >
            Destination
          </a>
        </li>
        <li>
          <a
            href=""
            className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-normal"
          >
            Hotels
          </a>
        </li>
        <li>
          <a
            href=""
            className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-normal"
          >
            Flights
          </a>
        </li>
        <li>
          <a
            href=""
            className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-normal"
          >
            Bookings
          </a>
        </li>
        <li>
          <a
            href=""
            className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-normal"
          >
            Login
          </a>
        </li>
        <li className="bg-transparent px-4 py-1.5 rounded-md border border-[#212832]/30 transition-all duration-200 hover:bg-[#DF6951] hover:text-white hover:shadow-sm hover:border-none hover:px-6 hover:py-2.5">
          <a href="" className="text-md font-medium">
            Sign up
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {open ? (
          <X
            size={24}
            onClick={() => setOpen(false)}
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
          />
        ) : (
          <Menu
            size={24}
            onClick={() => setOpen(true)}
            className="cursor-pointer transition-transform duration-200 hover:scale-110" 
          />
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 font-poppins text-sm text-[#212832] md:hidden z-50 animate-fadeIn">
          <li>
            <a href="" className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-medium">Destination</a>
          </li>
          <li>
            <a href="" className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-medium">Hotels</a>
          </li>
          <li>
            <a href="" className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-medium">Flights</a>
          </li>
          <li>
            <a href="" className="transition-colors duration-200 hover:text-[#5E3BE1] hover:font-medium">Bookings</a>
          </li>
          <li>
            <a href="" className="transition-colors duration-200 hover:text-[#DF6951] hover:font-medium hover:text-base">Login</a>
          </li>
          <li className="bg-transparent px-5 py-1.5 rounded-md border border-[#212832]/30 transition-all duration-200 hover:bg-[#DF6951] hover:text-white hover:shadow-sm hover:border-none hover:px-6 hover:py-2.5">
            <a href="" className="text-md font-medium">
              Sign up
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
