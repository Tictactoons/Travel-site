
import { motion } from "framer-motion";

interface Props {
  city: string;
  country: string;
  price: string;
  icon?: React.ReactNode;
  days: string;
  image: string;
}

const Destination = ({city, country, price, icon, days, image}: Props) => {
  return (

    <motion.div

    className="w-full max-w-[350px] mx-auto"
      initial={{ opacity: 0, y: 50 }}       
      whileInView={{ opacity: 1, y: 0 }}   
      viewport={{ once: true }}            
      transition={{ duration: 1.2, ease: "easeOut" }} 
    >
    
    
  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[400px] w-full max-w-[350px] mx-auto transition hover:shadow-xl cursor-pointer">
      <div className="h-[70%] w-full">
        <img src={image} alt={`${city} image`} className="w-full h-full object-cover" />
      </div>

    
        <div className="flex p-4 justify-between items-center">
          <p className="text-[#5E6282] font-poppins font-md text-sm">{city}, {country}</p>
          <p className="text-[#5E6282] font-poppins font-md text-sm">{price}</p>
        </div>

      <div className="px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <div className="text-[#080809] text-xs">{icon}</div>}
          <p className="text-[#5E6282] font-poppins font-light text-sm">{days} Days Trip</p>
        </div>
      </div>
    </div>
    </motion.div>

  );
};

export default Destination;
