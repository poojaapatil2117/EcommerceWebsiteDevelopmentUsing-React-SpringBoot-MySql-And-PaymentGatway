import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./customer/Components/Navbar/Navigation";
import CustomerRoutes from "./Routers/CustomerRoutes";
import NotFound from "./Pages/Notfound";
import AdminPannel from "./Admin/AdminPannel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";
import AdminRoutes from "./Routers/AdminRoutes";
// import Routers from './Routers/Routers';

function App() {
  const {auth}=useSelector(store=>store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
       <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
      {/* <AdminPannel/> */}
      
    </div>
  );
}

export default App;
