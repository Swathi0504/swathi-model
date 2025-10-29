import React, { useEffect, useState } from 'react'
import { GET_PRODUCT_API } from '../utils/constant'
import CardsList from './CardsList';
import { useSelector } from "react-redux";

const Cards = () => {
  const [productList, setProductlist] = useState([]);  
  const show = useSelector((store)=>store.cart.isShow);
  
  useEffect(()=>{
    getProductlist();
  },[]);
   
  const getProductlist = async () => {
    const data = await fetch(GET_PRODUCT_API);
    const json = await data.json();
    setProductlist(json);
  }
   
  if(productList?.length === 0) return;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f3f4f6]/80 to-[#c7d2fe]/70 backdrop-blur-lg py-16 px-20">
      <div className={`${show ? 'grid-cols-3' : 'grid-cols-4'} grid gap-8 place-items-center`}>
        {productList.map((product, index) => (
          <CardsList key={index} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Cards;
