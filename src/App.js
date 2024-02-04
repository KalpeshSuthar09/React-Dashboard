import Logout from "./Page/Login/Logout";
import Order from "./Page/Order/Order";
import "./App.css";
import Navbar from "./Page/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Booking from './Page/Booking/Booking'
import Product from './Page/Product/Products'
import UserPage from './Page/User/UserPage'

function App() {
  return (
    <>
          <Navbar />
      <div className="container">
        <Routes>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/Order" element={<Order />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/UserPage" element={<UserPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
