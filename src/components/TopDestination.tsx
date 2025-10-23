import { FaLocationArrow } from "react-icons/fa";
import Destination from "./Destination";
import {motion } from "framer-motion"


const TopDestination = () => {
  const destinations = [
    {
      city: "Rome",
      country: "Italy",
      price: "$1200",
      days: "10",
      image: "/public/Rome.png",
    },
    {
      city: "Paris",
      country: "France",
      price: "$1500",
      days: "7",
      image: "/public/London.jpg",
    },
    {
      city: "Tokyo",
      country: "Japan",
      price: "$2000",
      days: "14",
      image: "/public/Europe.png",
    },
  ];

  return (

    <motion.div
    className=""
      initial={{ opacity: 0, y: 50 }}       // start slightly below and invisible
      whileInView={{ opacity: 1, y: 0 }}   // slide up into place
      viewport={{ once: true }}             // trigger animation only once
      transition={{ duration: 1.1, ease: "easeOut" }} // smooth movement
    >

    <section className="py-16 px-24 md:px-24 flex justify-center">
      <div className="w-full max-w-[1024px]">
        <h2 className="text-center font-poppins font-medium text-[#5E6282] text-sm mb-4">
          TOP SELLING
        </h2>
        <h2 className="text-3xl font-bold mb-10 text-center font-volkhov">
          Top Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {destinations.map((dest) => (
            <Destination
              key={dest.city}
              city={dest.city}
              country={dest.country}
              price={dest.price}
              days={dest.days}
              image={dest.image}
              icon={<FaLocationArrow />}
            />
          ))}
        </div>
      </div>
    

    </section>
    </motion.div>
  );
};

export default TopDestination;
