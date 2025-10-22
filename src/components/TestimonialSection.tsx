import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <section className="py-16 px-32 md:px-32 max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center">
      {/* Left: Heading */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-sm font-medium text-blue-600 uppercase mb-2">
          Testimonials
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold">
          What People Say About Us
        </h1>
      </div>

      {/* Right: Vertical Carousel */}
      <div className="md:w-1/2 flex justify-center">
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialSection;
