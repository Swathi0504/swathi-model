import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  updateQuantity,
  removeQuantity,
  removeItems,
} from "../utils/cartSlice";

const CardsList = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const ispresent = cartItems.find((i) => i.id === product.id);
  const [present, setPresent] = useState(!!ispresent);

  const handleaddItems = (item) => {
    if (ispresent) return;
    setPresent(true);
    dispatch(addItems(item));
    dispatch(updateQuantity({ item, no: 1 }));
  };

  const handleremoveItems = (item) => {
    setPresent(false);
    dispatch(removeItems(item));
    dispatch(removeQuantity(item));
  };

  return (
    <div className="w-[230px] h-[340px] bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col items-center">
      <div className="flex-1 flex items-center justify-center mt-5">
        <img
          className="w-[130px] h-[150px] object-contain drop-shadow-sm"
          alt={product.title}
          src={product.image}
        />
      </div>

      <div className="w-full px-4 pb-5 text-center">
        <h1 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">
          {product.title.split(" ").slice(0, 4).join(" ")}
        </h1>
        <p className="font-bold text-blue-700 mb-3">${product.price}</p>

        {present ? (
          <button
            onClick={() => handleremoveItems(product)}
            className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white text-sm px-5 py-2 rounded-lg w-full font-medium shadow-md transition-all duration-200"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => handleaddItems(product)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm px-5 py-2 rounded-lg w-full font-medium shadow-md transition-all duration-200"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CardsList;
