import React from "react";

const Sponsors = () => {
  const sponsors = [
    
    "/public/pics/axon.png",
    "/public/pics/expedia.png",
    "/public/pics/jet.png",
    "/public/pics/axon.png",
    "/public/pics/expedia.png",
    "/public/pics/jet.png",
    "/public/pics/axon.png",
    "/public/pics/expedia.png",
    "/public/pics/jet.png",
    "/public/pics/axon.png",
    "/public/pics/expedia.png",
    "/public/pics/jet.png",
    
    
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-10 px-12 md:px-32 lg:px-52">
      <h2 className="text-center text-2xl px-12 font-medium mb-8 font-opensans text-[#5E6282]">
        Trusted by leading brands
      </h2>
      <div className="relative flex overflow-hidden">
        {/* animation container */}
        <div className="flex animate-scroll gap-16 ">
          {sponsors.concat(sponsors).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`sponsor-${index}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
