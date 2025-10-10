import React from 'react'
import { useSelector } from 'react-redux'

const Yourcart = () => {

  const cartItems = useSelector((store)=>store.cart.items);

  const totalprice = useSelector((store)=>store.cart.count);

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
                       <img className="w-[50px] h-[50px] my-[20px]" src={item.image} />
                        <div className='my-[10px]'>
                            <h1 className='font-semibold'>{item.title.split(" ").slice(0, 3).join(" ")}</h1>
                            <p className="font-semibold">${item.price}</p>
                        </div> 
                        <hr className="w-[300px]" />
                    </>
                })
            }
         </div>
         <div className='flex w-[300px] justify-between mt-[30px]'>
            <h1 className='text-[22px]'>Total</h1>
            <p className='text-[22px]'>{totalprice}</p>
         </div>
    </div>
  )
}
}
export default Yourcart