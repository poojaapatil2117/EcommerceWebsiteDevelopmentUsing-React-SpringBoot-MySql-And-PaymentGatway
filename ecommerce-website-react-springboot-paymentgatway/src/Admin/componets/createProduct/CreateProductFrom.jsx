import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageURL: "",
    brand: "",
    title: "",
    color: "",
    discountPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secoundLevelCategory: "",
    thirdLevelCategory: "",
    desc: "",
  });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ data: productData, jwt }));
    console.log(productData);
  };

  return (
    // <Fragment className="createProductContainer">
    <>
     <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          {/* Firdt Div */}
          <div className="flex flex-auto justify-between">
            <Grid item xs={12} className="w-full">
              <TextField
                fullWidth
                label="Image URL"
                name="imageURL"
                value={productData.imageUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="ml-5 w-full">
              <TextField
                fullWidth
                label="Brand"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
              />
            </Grid>
          </div>

          {/* Secound Div */}

          <Grid item xs={12} sm={6} className="w-full">
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>

          <div className="flex flex-auto justify-between">
            <Grid item xs={12} sm={6} className="w-full">
              <TextField
                fullWidth
                label="Color"
                name="color"
                value={productData.color}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} className="w-full ml-5">
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                type="number"
              />
            </Grid>
          </div>

          <Grid item xs={12} sm={4} className="w-full">
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <div className="flex justify-around">
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Discounted Price"
                name="discountPrice"
                value={productData.discountedPrice}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4} className="ml-5">
              <TextField
                fullWidth
                label="Discount Percentage"
                name="discountPersent"
                value={productData.discountPersent}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={6} sm={4} className="ml-5 w-[14rem]">
              <FormControl fullWidth>
                <InputLabel>Top Level Category</InputLabel>
                <Select
                  name="topLevelCategory"
                  value={productData.topLavelCategory}
                  onChange={handleChange}
                  label="Top Level Category"
                >
                  <MenuItem value="men">Men</MenuItem>
                  <MenuItem value="women">Women</MenuItem>
                  <MenuItem value="kids">Kids</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={4} className="ml-5 w-[14rem]">
              <FormControl fullWidth>
                <InputLabel>Second Level Category</InputLabel>
                <Select
                  name="secoundLevelCategory"
                  value={productData.secondLavelCategory}
                  onChange={handleChange}
                  label="Second Level Category"
                >
                  <MenuItem value="clothing">Clothing</MenuItem>
                  <MenuItem value="accessories">Accessories</MenuItem>
                  <MenuItem value="brands">Brands</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4} className="ml-5 w-[14rem]">
              <FormControl fullWidth>
                <InputLabel>Third Level Category</InputLabel>
                <Select
                  name="thirdLevelCategory"
                  value={productData.thirdLavelCategory}
                  onChange={handleChange}
                  label="Third Level Category"
                >
                  <MenuItem value="top">Tops</MenuItem>
                  <MenuItem value="women_dress">Dresses</MenuItem>
                  <MenuItem value="t-shirts">T-Shirts</MenuItem>
                  <MenuItem value="saree">Saree</MenuItem>
                  <MenuItem value="mens_kurta">mens kurta</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </div>

          <Grid item xs={12} className="w-full">
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="desc"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>

          <div className="flex">
            {productData.size.map((size, index) => (
              <Grid container item spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Size Name"
                    name="name"
                    value={size.name}
                    onChange={(event) => handleSizeChange(event, index)}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Quantity"
                    name="size_quantity"
                    type="number"
                    onChange={(event) => handleSizeChange(event, index)}
                    required
                    fullWidth
                  />
                </Grid>{" "}
              </Grid>
            ))}
          </div>

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 0.7 }}
              color="primary"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
     
    // </Fragment>
  );
};

export default CreateProductForm;
