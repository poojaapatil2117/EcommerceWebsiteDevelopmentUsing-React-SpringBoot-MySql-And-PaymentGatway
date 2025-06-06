// import {
//   Box,
//   CssBaseline,
//   Divider,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";



import * as React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
// import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
// import { customTheme } from "./them/customeThem";
// import AdminNavbar from "./Navigation/AdminNavbar";
// import Dashboard from "./Views/Admin";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import DemoAdmin from "./Views/DemoAdmin";
// import CreateProductForm from "./componets/createProduct/CreateProductFrom";

// import "./AdminPannel.css";
// import ProductsTable from "./componets/Products/ProductsTable";
// import OrdersTable from "./componets/Orders/OrdersTable";
// import Customers from "./componets/customers/customers";
// import UpdateProductForm from "./componets/updateProduct/UpdateProduct";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateProductForm from "./componets/createProduct/CreateProductFrom";
import UpdateProductForm from "./componets/updateProduct/UpdateProduct";
import Customers from "./componets/customers/customers";
import ProductsTable from "./componets/Products/ProductsTable";
import OrdersTable from "./componets/Orders/OrdersTable";
import DemoAdmin from "./Views/DemoAdmin";
import Dashboard from "./Views/Admin";
import AdminDashboard from "./Views/Admin";
const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Products", path: "/admin/products" },
  { name: "Customers", path: "/admin/customers" },
  { name: "Orders", path: "/admin/orders" },
  { name: "Add Product", path: "/admin/product/create" },
  //   {name:"Total Earnings",path:"/admin"},
  //   {name:"Weekly Overview",path:"/admin"},
  //   {name:"Monthly Overview",path:"/admin"},
];

export default function AdminPannel() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border: "1px solid blue",
        height :"100%"
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem
          // key={item.name}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            {/* <ListItemText primary={item.name} /> */}
            
            <ListItemText> Account </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      {/* <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
         <Divider />
         {["Account", "Request"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 ===  0 ? <InboxIcon /> : <MailIcon />}
                
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
         ))}
       </List>  */}
    </Box>
  );

  //   const handleSideBarViewInMobile = () => {
  //     setSideBarVisible(true);
  //   };

  //   const handleCloseSideBar = () => {
  //     setSideBarVisible(false);
  //   };

    const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    // <ThemeProvider theme={customTheme}>

    <>
      <div className="relative flex h-[100vh] st">
         <CssBaseline />
    {/* //     <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} /> */}

        {/* <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                  {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    height: "100%",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                  },
              }),
            },
          }}
          // open={isLargeScreen || sideBarVisible}
          // onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer> */}

         <div className="w-[15%] h-full fixed top-0"
          // open={isLargeScreen || sideBarVisible}
          // onClose={handleCloseSideBar}
        >
          {drawer}
        </div>
        


         <div className="w-[85%] h-full ml-[15%]">
           <Toolbar />
           <Routes>
             <Route path="/" element={ <AdminDashboard />}></Route>
             <Route path="/product/create" element={<CreateProductForm/>}></Route>
              <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route>
             <Route path="/products" element={<ProductsTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
            <Route path="/demo" element={<DemoAdmin />}></Route>
        </Routes>
       </div>
       </div>
       
    {/* Hello world */}
       </>
    // </ThemeProvider>

  );
}
