import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between w-[80%] lg:w-[70%] max-w-[1200px] mx-auto py-16 relative overflow-hidden">
      {/* Left Side - Text */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h5 className="mb-4 font-opensans font-bold text-md text-[#DF6951]">
          BEST DESTINATIONS AROUND THE WORLD
        </h5>

        <h1 className="leading-tight text-4xl md:text-5xl md:leading-tight font-volkhov font-bold text-[#212832] mb-4">
          Travel, enjoy and live a new and full life
        </h1>

        <p className="font-opensans text-gray-700 text-sm md:text-sm mb-6">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className="flex items-center gap-6">
          <button className="bg-[#F1A501] font-poppins text-white text-xs px-5 py-3 rounded-md font-small hover:bg-gray-800 transition-all duration-200 hover:scale-95">
            Find out more
          </button>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#DF6951] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(223,105,81,0.3)] transition-all duration-200 hover:scale-110">
              <i className="fa-solid fa-play text-white text-sm"></i>
            </div>
            <p className="font-poppins font-light text-sm text-[#5E6282]">
              Play Demo
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 flex justify-center relative"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img
          src="/src/assets/image.png" // replace with your image path
          alt="Traveler sitting on luggage"
          className="w-full h-auto max-w-md"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
