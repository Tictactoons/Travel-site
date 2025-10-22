import ServiceCard from "./ServiceCard";
import { FaCloudSun, FaPlane, FaCalendarAlt, FaCogs } from "react-icons/fa";


const Category = () => {
  const service = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: <FaCloudSun />,
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: <FaPlane />,
  },
  {
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers",
    icon: <FaCogs />,
  },
];


  return (
  <div className="py-16 px-6 md:px-16 bg-white w-[90%] md:w-[85%] lg:w-full max-w-[1200px] mx-auto">
      <h2 className="text-center font-poppins font-medium text-[#5E6282] text-sm mb-4">CATEGORY</h2>
      <h2 className="text-3xl font-bold mb-10 text-center font-volkhov">
        We Offer Best Services
      </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {service.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Category;
