import { FaLocationArrow } from "react-icons/fa";
import Destination from "./Destination";

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
    <section className="py-8 px-8 md:px-12 flex justify-center">
      <div className="w-full max-w-[1024px]">
        <h2 className="text-center font-poppins font-medium text-[#5E6282] text-sm mb-4">TOP SELLING</h2>
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
  );
};

export default TopDestination;
