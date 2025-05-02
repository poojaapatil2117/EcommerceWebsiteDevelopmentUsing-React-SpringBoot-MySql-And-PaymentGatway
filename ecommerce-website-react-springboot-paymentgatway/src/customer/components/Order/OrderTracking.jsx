import { Stepper } from "@mui/material";
import React from "react";

const OrderTracking = () => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel></Stepper>
    </div>
  );
};

export default OrderTracking;
