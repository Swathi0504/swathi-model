import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../utils/cartSlice";

const Yourcart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalprice = useSelector((store) => store.cart.count);

  const handleremoveitems = (e) => {
    dispatch(removeItems(e));
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-full text-center text-gray-700 bg-gradient-to-br from-indigo-50/60 via-purple-50/50 to-pink-50/60 backdrop-blur-md rounded-xl shadow-lg p-6">
        <h1 className="font-bold text-[22px] mb-3 text-gray-800">
          No cart items to show 😔
        </h1>
        <p className="text-sm text-gray-600">Add something to your cart!</p>
      </div>
    );
  } else {
    return (
      <div className="mt-[15px] ml-[15px] max-h-[500px] bg-gradient-to-br from-indigo-50/70 via-purple-50/60 to-pink-50/70 backdrop-blur-md rounded-xl shadow-lg px-4 py-4 flex flex-col w-[350px] border border-indigo-100">
        <div className="border-b border-gray-300 pb-3 mb-4 flex justify-between items-center">
          <h1 className="font-bold text-[22px] text-indigo-700 drop-shadow-sm">
            Your Cart
          </h1>
          <span className="text-sm text-gray-500">
            {cartItems.length} item{cartItems.length > 1 && "s"}
          </span>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain rounded-md"
                />
                <div>
                  <h2 className="font-semibold text-sm text-gray-800">
                    {item.title.split(" ").slice(0, 4).join(" ")}
                  </h2>
                  <p className="text-gray-600 text-sm">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleremoveitems(item)}
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-xs px-3 py-1.5 rounded-md shadow-md transition-all duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-3 mt-4">
          <div className="flex justify-between text-[18px] font-semibold text-indigo-700">
            <span>Total</span>
            <span>${totalprice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Yourcart;
