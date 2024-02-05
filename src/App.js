import "./App.css";
import Logout from "./Page/Login/Logout";
import Order from "./Page/Order/Order";
import Navbar from "./Page/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booking from "./Page/Booking/Booking";
import Product from "./Page/Product/Products";
import UserPage from "./Page/User/UserPage";
import Login from "./Page/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} exact={true}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/Order" element={<Order />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/UserPage" element={<UserPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
