import { FaCloudSun, FaPlane, FaCalendarAlt, FaCogs } from 'react-icons/fa';
import { motion } from "framer-motion";


interface Props {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const ServiceCard = ({title, description, icon} : Props) => {
  return (

    <motion.div
    className=""
      initial={{ opacity: 0, y: 50 }}       // start slightly below and invisible
      whileInView={{ opacity: 1, y: 0 }}   // slide up into place
      viewport={{ once: true }}             // trigger animation only once
      transition={{ duration: 1.2, ease: "easeOut" }} // smooth movement
    >

  <div className="bg-white rounded-[40px] shadow-lg p-[50px] flex flex-col items-center text-center w-full min-w-[220px] max-w-[300px] mx-auto transition hover:shadow-xl">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#DF6951] text-3xl"> {icon} </div>
      <h3 className="font-semibold text-[15px] text-[#1E1D4C] mb-2 font-opensans text-center leading-snug max-w-[120px]">{title}</h3>
      <p className="font-light font-poppins text-[11px] text-center text-[#5E6282] max-w-[125px]">{description}</p>
    </div>
    </motion.div>
  )
}

export default ServiceCard
