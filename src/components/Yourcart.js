import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItems } from '../utils/cartSlice';

const Yourcart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((store)=>store.cart.items);

  const totalprice = useSelector((store)=>store.cart.count);

  const handleremoveitems = (e) => {
    dispatch(removeItems(e));
  }

  if(cartItems.length===0) 
    {
        return (
               <div className='mt-[100px] ml-[100px] bg-white rounded-lg shadow-lg px-[25px] py-[25px]'>
                    <h1 className='font-bold text-[25px]'>No cart items to show😔</h1>
               </div>
         )
   }
    else 
  {
  return (
    <div className='mt-[100px] ml-[100px] bg-white rounded-lg shadow-lg px-[25px] py-[25px]'>
         <h1 className="font-bold text-[26px] mb-[20px]">Your Cart</h1>
         <hr className="w-[300px]" />
         <div className='my-10px'>
            {
                cartItems.map((item)=>{
                    return <>
                       <img alt="" className="w-[50px] h-[50px] my-[20px]" src={item.image} />
                        <div className='mt-[10px]'>
                            <h1 className='font-semibold'>{item.title.split(" ").slice(0, 3).join(" ")}</h1>
                            <p className="font-semibold">${item.price}</p>
                        </div> 
                        <button className='my-[12px] bg-blue-400 text-white px-[20px] py-[10px] rounded-[8px]' onClick={()=>handleremoveitems(item)}>Remove</button>
                        <hr className="w-[300px]" />
                    </>
                })
            }
         </div>
         <div className='flex w-[300px] justify-between mt-[30px]'>
            <h1 className='text-[22px]'>Total</h1>
            <p className='text-[22px]'>{totalprice.toFixed(2)}</p>
         </div>
    </div>
  )
}
}
export default Yourcart