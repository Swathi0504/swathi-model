import React, { useEffect, useState } from 'react'
import { GET_PRODUCT_API } from '../utils/constant'
import CardsList from './CardsList';
const Cards = () => {
  
  const [productList,setProductlist] = useState([]);  
  
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
    <div className='mt-[100px] grid grid-cols-4 w-[1200px] gap-8'>
       {
        productList.map((product,index)=>{
          return <CardsList key={index} product={product}/>
        })
       }
    </div>
  )
}

export default Cards