import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { showItems } from '../utils/cartSlice';
const Navigation = () => {
    
  const cartItems = useSelector((store)=>store.cart.items); 
  const dispatch = useDispatch()


  const handleshow = ()=>{
     dispatch(showItems());
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600/80 via-purple-600/70 to-pink-500/70 backdrop-blur-lg shadow-lg py-4 px-10 flex justify-between items-center z-50 border-b border-white/20">
      <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
        Fake Store
      </h1>

      <div className="relative cursor-pointer" onClick={handleshow}>
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-2xl text-white hover:text-yellow-300 transition-all duration-200"
        />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
            {cartItems.length}
          </span>
        )}
      </div>
    </nav>
  )
}

export default Navigation