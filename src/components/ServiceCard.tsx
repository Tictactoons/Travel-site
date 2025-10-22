import { FaCloudSun, FaPlane, FaCalendarAlt, FaCogs } from 'react-icons/fa';

interface Props {
    title: string;
    description: string;
    icon?: React.ReactNode
}

const ServiceCard = ({title, description, icon} : Props) => {
  return (
  <div className="bg-white rounded-[40px] shadow-lg p-[50px] flex flex-col items-center text-center w-full min-w-[220px] max-w-[300px] mx-auto transition hover:shadow-xl">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#DF6951] text-3xl"> {icon} </div>
      <h3 className="font-semibold text-[15px] text-[#1E1D4C] mb-2 font-opensans text-center leading-snug max-w-[120px]">{title}</h3>
      <p className="font-light font-poppins text-[11px] text-center text-[#5E6282] max-w-[125px]">{description}</p>
    </div>
  )
}

export default ServiceCard
