import React from "react";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Yourcart from "./Yourcart";
import { useSelector } from "react-redux";

const Body = () => {
  
  const show = useSelector((store)=>store.cart.isShow)
  
  return (
     <div className="min-h-screen">

      <div className="relative z-50">
        <Navigation />
      </div>

      <div className="flex justify-center items-start pt-8 px-6 relative">
        <div className={`transition-all duration-500 ${show ? "mr-[320px]" : ""}`}>
          <Cards />
        </div>

        {show && (
          <div
            className="fixed right-[10px] top-[150px] w-[400px] bg-white shadow-xl border-l border-gray-200 p-5 z-40 overflow-y-auto transition-transform duration-500"
          >
            <Yourcart />
          </div>
        )}
      </div>
    </div>

  );
}

export default Body;