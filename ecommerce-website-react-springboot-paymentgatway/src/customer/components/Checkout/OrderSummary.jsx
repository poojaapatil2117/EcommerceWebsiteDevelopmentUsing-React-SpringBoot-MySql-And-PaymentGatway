import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItems from '../Cart/CartItems'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-md border '>
            <AddressCard/>


        </div>

        <div>
              <div className="lg:grid grid-cols-3  relative ">
                <div className="col-span-2">
                  {[1, 1, 1, 1].map((iteml) => (
                    <CartItems />
                  ))}
                </div>
        
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                  <div className="border">
                    <p className="uppercase font-bold opacity-60 pb-4 p-3">
                      Price Details
                    </p>
                    <hr />
                    {/* <Divider/> */}
                    <div className="space-y-3 font-semibold mb-10 p-4">
                      <div className="flex justify-between pt-3 text-black">
                        <span>Price</span>
                        <span className="text-green-600">₹4675</span>
                      </div>
                      <div className="flex justify-between pt-3 text-black">
                        <span>Discount</span>
                        <span className="text-green-600">-₹3419</span>
                      </div>
                      <div className="flex justify-between pt-3 text-black">
                        <span>Dilevery Charge</span>
                        <span className="text-green-600">Free</span>
                      </div>
                      <div className="flex justify-between pt-3 text-black font-bold">
                        <span>Total Amount</span>
                        <span className="text-green-600 font-bold">₹4175</span>
                      </div>
                    </div>
        
                    <Button
                      className="w-full mt-4 p-3"
                      variant="contained"
                      sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
                    >
                      Check Out
                    </Button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default OrderSummary