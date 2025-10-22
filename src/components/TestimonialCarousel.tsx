import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Travel Enthusiast",
    text: "This was the smoothest travel booking experience I've ever had. Highly recommended!",
    avatar: "/avatars/alice.jpg",
  },
  {
    name: "Michael Lee",
    role: "Digital Nomad",
    text: "Amazing destinations and excellent support. I’ll definitely book again.",
    avatar: "/avatars/michael.jpg",
  },
  {
    name: "Sara Kim",
    role: "Adventure Seeker",
    text: "The trip planning process was so easy and stress-free. Loved it!",
    avatar: "/avatars/sara.jpg",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex items-center gap-4">
      <TestimonialCard {...testimonials[currentIndex]} />

      <div className="flex flex-col gap-8"> 
        <button
          onClick={handlePrev}
          className=" text-[#BCB7C2] p-2 rounded-full hover:bg-[#DFD7F9]"
        >
          <FaArrowUp />
        </button>

        <button
          onClick={handleNext}
          className="text-[#3E2E4D] p-2 rounded-full hover:bg-[#DFD7F9]"
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
