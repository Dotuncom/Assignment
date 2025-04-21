import React from "react";
import FoodPreview from "./Food/FoodPreview";
import Navbar from "../UlitiliComponents/Navbar";
import Footer from "../UlitiliComponents/Footer";
const Home = () => {
  return (
    <div>
      <div className="bg-gray-50 max-w-full max-h-full overflow-x-hidden">
        <Navbar />
        <main className="pt-16">
        <FoodPreview />
        <Footer/>

        </main>
      </div>
    </div>
  );
};

export default Home;
