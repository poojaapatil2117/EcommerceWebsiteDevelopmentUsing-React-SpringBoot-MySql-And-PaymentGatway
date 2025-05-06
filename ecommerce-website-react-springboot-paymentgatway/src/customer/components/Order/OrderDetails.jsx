import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracking from "./OrderTracking";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div className="px-20 lg:px-5 ">
      <div>
        <h1 className="font-bold text-xl py-7 ">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracking activeStep={3} />
      </div>

      {/* Orders  */}
      <Grid container className="space-y-5">
        {[1, 1, 1, 1,1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border "
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: "80px",
              width: "1300px",
            }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/knyxqq80/salwar-kurta-dupatta/q/i/q/32-skd7385-biba-original-imag2jag2zzz3shw.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2">
                  <p className="font-semibold">Solid Stitched Lehenga Choli</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color :Silver Size: xl</span>
                  </p>
                  <p>Seller</p>
                  <p>₹3,499</p>
                </div>
              </div>
            </Grid>

            {/* Rating */}
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate And Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
