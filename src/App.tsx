import Book from "./components/Book";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/TestimonialSection";
import TopDestination from "./components/TopDestination";

function App() {
  return (
    <>
      <div className="relative">
        <img src="/src/assets/Decore.png" alt="" className="absolute top-0 right-0 w-auto h-[500px] object-cover pointer-events-none z-0" />
        <Navbar/>
        <Hero />
        <Category  />
        <TopDestination />
        <Book />
        <TestimonialSection />
      </div>
    </>
  );
}

export default App;
