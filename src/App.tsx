import Book from "./components/Book";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";
import Subscribe from "./components/Subscribe";
import TestimonialSection from "./components/TestimonialSection";
import TopDestination from "./components/TopDestination";
import Preloader from "./components/Preloader";

import { useEffect, useState } from "react";
import loadingAnimation from "/public/assets/loading.json";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Automatically stop after 2.5s (or after assets load)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading && <Preloader />}
      <div className={`${loading ? "overflow-hidden h-screen" : "overflow-auto"}`}></div>
      <div className="relative">
        <img src="/src/assets/Decore.png" alt="" className="absolute top-0 right-0  w-full h-[500px] object-cover pointer-events-none z-0" /></div>
        <Navbar/>
        <Hero />
        <Category  />
        <TopDestination />
        <Book />
        <TestimonialSection />
        <Sponsors />
        <Subscribe />
        <Footer />
      
    </>
  );
}

export default App;
