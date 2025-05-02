import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const OrderDetails = () => {
  return (
    <div className='px-20 lg:px-5 '>
        <div>
            <h1 className='font-bold text-xl py-7 '>Delivery Address</h1>
             <AddressCard/>
        </div>
       
    </div>
  )
}

export default OrderDetails