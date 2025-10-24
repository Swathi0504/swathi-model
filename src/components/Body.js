import React from "react";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Yourcart from "./Yourcart";
import { useSelector } from "react-redux";

const Body = () => {
  
  const show = useSelector((store)=>store.cart.isShow)
  
  return (
    <div>
      <Navigation/>
      <div className="flex items-start">
         <Cards/>
         {show && <Yourcart/>}
      </div>
    </div>
  );
}

export default Body;