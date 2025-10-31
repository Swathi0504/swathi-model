import React, { useEffect, useState } from "react";
import { GET_PRODUCT_API } from "../utils/constant";
import CardsList from "./CardsList";
import { useSelector } from "react-redux";

const Cards = () => {
  const [productList, setProductlist] = useState([]);
  const show = useSelector((store) => store.cart.isShow);

  useEffect(() => {
    getProductlist();
  }, []);

  const getProductlist = async () => {
    const data = await fetch(GET_PRODUCT_API);
    const json = await data.json();
    setProductlist(json);
  };

  if (productList?.length === 0) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 py-14 px-8 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-2 drop-shadow-sm">
          Our Products 🛍️
        </h1>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {productList.map((product, index) => (
          <CardsList key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
