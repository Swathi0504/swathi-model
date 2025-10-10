import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
const Navigation = () => {
    
  const cartItems = useSelector((store)=>store.cart.items); 

  return (
    <div className="flex justify-between">
        <h1 className="text-[30px]">Fake Store</h1>
        <div className='flex'>
           <FontAwesomeIcon icon={faCartShopping} />
           <h1 className='font-bold bg-red-500 rounded-full h-[20px] w-[20px] text-white text-center'>{cartItems.length}</h1>
        </div>
    </div>
  )
}

export default Navigation