import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate();


  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border ml-3 pl-4">
      <Grid container spacing={2} className="space-x-40">
        <Grid item sx={6}>

          <div className="flex cursor-pointer">

            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70"
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p>Majestic Man</p>
              <p className="">Men Solid Pure Cotton Straight Kurta</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color : Black</p>
            </div>

          </div>
          
        </Grid>

        <Grid item sx={2}>
          1499
        </Grid>

        <Grid item sx={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Deliverd on March 03</span>
              </p>
              <p className="text-xs">Your Item Has Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expectd delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
