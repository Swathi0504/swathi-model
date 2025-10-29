import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItems } from '../utils/cartSlice';

const CardsList = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store)=>store.cart.items); 
  
  const handleaddItems = (item) => {
    const ispresent = cartItems.find(i => i.id === item.id);
    if(ispresent) {
      alert("Item already exists in your cart!");
      return;
    }
    dispatch(addItems(item));
  }

  return (
    <div className="w-[250px] h-[360px] bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-between">
      <img 
        className="w-[140px] h-[160px] mt-6 object-contain" 
        alt={product.title} 
        src={product.image} 
      />
      <div className="w-full px-4 pb-5 text-center">
        <h1 className="font-semibold text-gray-800 mb-1">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h1>
        <p className="font-semibold text-blue-600 mb-3">${product.price}</p>
        <button 
          onClick={() => handleaddItems(product)} 
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-lg w-full transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default CardsList;
