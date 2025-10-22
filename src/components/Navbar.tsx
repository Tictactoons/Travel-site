const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 w-[70%] max-w-[1200px] mx-auto relative" >
      <div className="">
        <h1 className="text-2xl font-bold tracking-tighter font-opensans" style={{ color: "#212832"}}>Isaiah</h1>
      </div>
      <ul className="flex gap-6 px font-poppins text-xs font-light justify-center items-center text-[#212832]">
        <li><a href="">Destination</a></li>
        <li><a href="">Hotels</a></li>
        <li><a href="">Flights</a></li>
        <li><a href="">Bookings</a></li>
        <li><a href="">Login</a></li>
        <li className="bg-transparent px-4 py-1.5 rounded-md border border-gray-400"><a href="" className="text-md font-medium">Sign up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
 