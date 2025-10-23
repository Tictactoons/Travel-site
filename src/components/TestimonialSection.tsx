import { motion } from "framer-motion";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <section className="py-8 px-6 md:px-24 lg:px-32 max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center overflow-hidden">
      {/* Left: Heading (from left) */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="font-opensans text-gray-500 text-xs font-semibold mb-4 uppercase tracking-wide">
          Testimonials
        </h2>
        <h1 className="leading-tight text-4xl md:text-4xl md:leading-tight font-volkhov font-semibold text-[#212832] mb-4">
          What People Say About Us.
        </h1>
      </motion.div>

      {/* Right: Carousel (from right) */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <TestimonialCarousel />
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
