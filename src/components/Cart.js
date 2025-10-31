import React from 'react'
import Yourcart from './Yourcart'

const Cart = () => {
  return (
    <div>
          <div className="fixed right-[10px] top-[150px] w-[400px] bg-white shadow-xl border-l border-gray-200 p-5 z-40 overflow-y-auto transition-transform duration-500">
            <Yourcart />
          </div>
    </div>
  )
}

export default Cart