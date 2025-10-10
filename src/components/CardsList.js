import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItems } from '../utils/cartSlice';

const CardsList = ({index,product}) => {
  
  const dispatch = useDispatch();

  const cartItems = useSelector((store)=>store.cart.items); 
  
  const handleaddItems = (e) => {
    const ispresent = cartItems.find(item => item.id === e.id);
    if(ispresent) {
      alert("Item already exist");
      return;
    }
    dispatch(addItems(e));
  }

  return (
    <div className='w-[250px] h-[350px] bg-white rounded-lg shadow-lg'>
        <img className="w-[150px] h-[170px] mx-[50px] my-[20px]" src={product.image} />
        <div className='mx-[15px]'>
          <h1 className='font-semibold'>{product.title.split(" ").slice(0, 3).join(" ")}</h1>
          <p className="font-semibold">${product.price}</p>
          <button className='bg-blue-400 p-[10px] mt-[10px] w-[200px] text-white rounded-[5px]' onClick={()=>handleaddItems(product)}>Add to cart</button>
        </div>
    </div>
  )
}

export default CardsList