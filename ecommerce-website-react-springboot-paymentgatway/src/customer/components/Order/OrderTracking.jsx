import { Label } from "@headlessui/react";
import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { color } from "../Product/FilterData";
const steps =[
  "Placed",
  "Order Confirmed",
  "Shift",
  "Out for Delivery",
  "Delivered"
]
const OrderTracking = ({activeStep}) => {
  return (
    <div className="w-full">
      <Stepper activeStep = {activeStep} alternativeLabel>

        {steps.map((Label) => <Step>
          <StepLabel sx={{color:"#9155fd",fontSize:"44px"}}>{Label}</StepLabel>
        </Step>)}

      </Stepper>
    </div>
  );
};

export default OrderTracking;
