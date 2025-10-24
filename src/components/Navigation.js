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
    <div className="flex justify-between">
        <h1 className="text-[30px]">Fake Store</h1>
        <div className='flex'>
           <FontAwesomeIcon icon={faCartShopping} onClick={()=>handleshow()} />
           <h1 className='font-bold bg-red-500 rounded-full h-[20px] w-[20px] text-white text-center'>{cartItems.length}</h1>
        </div>
    </div>
  )
}

export default Navigation