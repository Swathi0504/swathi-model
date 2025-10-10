import React from "react";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Yourcart from "./Yourcart";

const Body = () => {
  return (
    <div>
      <Navigation/>
      <div className="flex items-start">
         <Cards/>
         <Yourcart/>
      </div>
    </div>
  );
}

export default Body;