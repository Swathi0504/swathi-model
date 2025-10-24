import React, { useEffect, useState } from 'react'
import { GET_PRODUCT_API } from '../utils/constant'
import CardsList from './CardsList';
import { useSelector } from "react-redux";

const Cards = () => {
  
  const [productList,setProductlist] = useState([]);  

  const show = useSelector((store)=>store.cart.isShow)
  
  useEffect(()=>{
      getProductlist();
  },[]);
   
  const getProductlist = async () => {
    const data = await fetch(GET_PRODUCT_API);
    const json = await data.json();
    setProductlist(json);
    console.log(json);
  }
   
  if(productList?.length===0) return;


  return (
    show?<div className='ml-[100px] mt-[100px] grid grid-cols-3 w-[1200px] gap-8'>
       {
        productList.map((product,index)=>{
          return <CardsList key={index} product={product}/>
        })
       }
    </div>:
    <div className='ml-[100px] mt-[100px] grid grid-cols-4 w-[1200px] gap-8'>
       {
        productList.map((product,index)=>{
          return <CardsList key={index} product={product}/>
        })
       }
    </div>
  )
}

export default Cards