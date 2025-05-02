import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 45, hight: 45, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2 ">
            <div>
              <p className="font-semibold text-lg">Sita</p>
              <p className="opacity-70">April 5 , 2023</p>
            </div>
          </div>

          <Rating value={4.5} name="half rating" readOnly precision={0.5} />
          <p className="font-semibold text-lg ">
            Nice Product Love this Sarree
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
