import { FaCalendarAlt, FaPlane, FaMoneyBillWave, FaCar, FaIdCard, FaCalendarCheck } from "react-icons/fa";
import bookImage from "../assets/book-travel.jpg"; // Replace with your image path

const Book = () => {
  return (
    <section className="py-16 px-32 md:px-32 max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="md:w-1/2 space-y-6">
        <h2 className="font-opensans text-gray-500 text-sm font-semibold mb-4">
          Easy and Fast
        </h2>
        <h1 className="leading-tight text-4xl md:text-4xl md:leading-tight font-volkhov font-semibold  text-[#212832] mb-4">
          Book Your Next Trip in 3 Easy Steps
        </h1>

        <div className="flex items-start gap-4 mt-6">
          <div className="bg-[#F0BB1F] h-12 w-12 rounded-2xl flex justify-center items-center">
            <FaCalendarCheck className="text-[#fff] text-2xl mt-1" />
          </div>

          <div>
            <h3 className="font-semibold text-sm text-[#5E6282] tracking-tight">
              Choose Destination
            </h3>
            <p className="font-extralight text-sm text-[#5E6282] tracking-tight max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#F15A2B] h-12 w-12 rounded-2xl flex justify-center items-center">
            <FaIdCard className="text-[#fff] text-2xl mt-1" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#5E6282] tracking-tight">
              Make Payment
            </h3>
            <p className="font-extralight text-sm text-[#5E6282] tracking-tight max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#006380] h-12 w-12 rounded-2xl flex justify-center items-center">
            <FaCar className="text-[#fff] text-2xl mt-1" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#5E6282] tracking-tight">
              Reach Airport on Selected Date
            </h3>
            <p className="font-extralight text-sm text-[#5E6282] tracking-tight max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full">
        <img
          src="/public/book.png"
          alt="Book your travel"
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>
    </section>
  );
};

export default Book;
