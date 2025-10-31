import React from "react";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Yourcart from "./Yourcart";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  
  const show = useSelector((store)=>store.cart.isShow)
  
  return (
     <div className="min-h-screen">
      <div className="relative z-50">
        <Navigation />
        <Outlet />
      </div>
    </div>

  );
}

export default Body;