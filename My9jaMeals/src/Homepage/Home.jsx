import React from "react";
import FoodPreview from "./Food/FoodPreview";
import Navbar from "../UlitiliComponents/Navbar";
import Footer from "../UlitiliComponents/Footer";
const Home = () => {
  return (
    <div>
      <div className="bg-gray-50 max-w-full max-h-full ">
        
        <Navbar />
        <main className="pt-16">
        <p className="font-medium text-base md:font-bold md:text-2xl md:text-center">
          Welcome to 9ja Meals where you can <br>
          </br>get your meals at convenient prices
        </p>
          <FoodPreview />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
