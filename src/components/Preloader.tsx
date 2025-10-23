
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // Adjust timing as you want (e.g., 2s)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="w-80 h-80"
        />
        <p className="text-[#212832] font-semibold text-lg animate-pulse">
          Loading your adventure...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
