import "./App.css";
import Logout from "./Page/Login/Logout";
import Order from "./Page/Order/Order";
import Navbar from "./Page/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booking from "./Page/Booking/Booking";
import Product from "./Page/Product/Products";
import UserPage from "./Page/User/UserPage";
import Login from "./Page/Login/Login";
import CurrentUser from './Page/CurrentUser/CurrentUser'
import PrivateRoute from "./PrivateRoute";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Logout" element={<PrivateRoute element={<Logout/>}/>}></Route>
        <Route path="/UserPage" element={<PrivateRoute element={<UserPage/>}/>}></Route>
        <Route path="/Order" element={<PrivateRoute element={<Order/>}></PrivateRoute>}></Route>
        <Route path="/Booking" element={<PrivateRoute element={<Booking/>}></PrivateRoute>}></Route>
        <Route path="/Product" element={<PrivateRoute element={<Product/>}></PrivateRoute>}></Route>  
        <Route path="/currentUser" element={<PrivateRoute element={<CurrentUser/>}></PrivateRoute>}></Route>
      </Routes>
    </Router>
  );
}

export default App;



