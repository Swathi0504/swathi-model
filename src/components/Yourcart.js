import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  removeItems,
  removeQuantity,
  updateQuantity,
} from "../utils/cartSlice";

const Yourcart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const cartquantity = useSelector((store) => store.cart.quantity);

  const handleremoveitems = (item) => {
    dispatch(removeItems(item));
    dispatch(removeQuantity(item));
  };

  const handleQuantityChange = (item, no) => {
    const id = item.id;
    const total = cartquantity[id].no + no;
    if (total >= 1) {
      dispatch(updateQuantity({ item: item, no: total }));
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * cartquantity[item.id].no,
    0
  );

  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  if (cartItems.length === 0) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center text-center text-gray-700 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200">
        <div className="bg-white/80 backdrop-blur-md px-10 py-12 rounded-2xl shadow-2xl border border-blue-200">
          <h1 className="font-bold text-3xl mb-3 text-blue-800">
            No cart items to show 😔
          </h1>
          <p className="text-base text-gray-600">
            Add something to your cart!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed mt-[50px] inset-0 flex flex-col items-center overflow-auto bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 p-6">
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-200 p-8 mt-6">
       
        <div className="flex justify-between items-center border-b border-blue-100 pb-4 mb-6">
          <h1 className="font-bold text-3xl text-blue-700 drop-shadow-sm">
            🛒 Your Cart
          </h1>
          <span className="text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full shadow-sm">
            {cartItems.length} items
          </span>
        </div>

        <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gradient-to-r from-white to-blue-50 rounded-lg p-4 shadow-md border border-blue-100 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
            >
              
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain rounded-md border border-blue-100 shadow-sm"
                />
                <div>
                  <h2 className="font-semibold text-gray-800 text-sm leading-snug">
                    {item.title.split(" ").slice(0, 5).join(" ")}
                  </h2>
                  <p className="text-blue-600 font-medium text-xs mt-1">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
              </div>

              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item, -1)}
                  className="px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md font-bold text-sm transition-all"
                >
                  −
                </button>
                <span className="font-semibold text-sm text-gray-700">
                  {cartquantity[item.id].no}
                </span>
                <button
                  onClick={() => handleQuantityChange(item, +1)}
                  className="px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md font-bold text-sm transition-all"
                >
                  +
                </button>
              </div>

             
              <div className="text-right w-28">
                <p className="text-blue-700 font-semibold text-sm">
                  ${(item.price * cartquantity[item.id].no).toFixed(2)}
                </p>
                <button
                  onClick={() => handleremoveitems(item)}
                  className="text-xs text-red-500 hover:underline mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-200 pt-6 mt-6 space-y-2 text-right">
          <p className="text-gray-700 text-sm">
            Subtotal:{" "}
            <span className="font-semibold text-blue-700">
              ${totalPrice.toFixed(2)}
            </span>
          </p>
          <p className="text-gray-700 text-sm">
            Discount (10%):{" "}
            <span className="font-semibold text-blue-700">
              -${discount.toFixed(2)}
            </span>
          </p>
          <p className="text-2xl font-bold text-blue-800 mt-2 drop-shadow-sm">
            Final Total: ${finalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yourcart;
