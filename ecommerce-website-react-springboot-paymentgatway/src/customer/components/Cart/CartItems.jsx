import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-lg">
      <div className="flex items-center ">
        {/* Image Div */}
        <div className="w-[5rem] h-[5rem]  lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/krme93k0/lehenga-choli/9/t/e/free-half-sleeve-ghaghra-choli-coconut-original-imag5df5ktsnnypv.jpeg?q=70"
            alt=""
          />
        </div>

        {/* Product Details */}

        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Embroidered Semi Stitched Lehenga Choli
          </p>
          <p className="opacity-70 ">Size:L,Blue</p>
          <p className="opacity-70 mt-2">seller:ZAALIMA FASHION</p>

          <div className="flex space-x-5 items-center text-gray-900 mt-6 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹448</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="items-center space-x-2">
          <IconButton color="">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7  border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145,85,256)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button variant="" sx={{ color: "RGB(145,85,256)" }}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
