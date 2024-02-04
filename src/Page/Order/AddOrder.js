/* import React, { useState } from "react";

export default function AddOrder({ addOrder }) {
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "Name") {
      setOrderData({ ...orderData, name: e.target.value });
    } else if (e.target.email === "Email") {
      setOrderData({ ...orderData, email: e.target.value });
    } else if (e.target.number === "Number") {
      setOrderData({ ...orderData, number: e.target.value });
    } else {
      setOrderData({ ...orderData, address: e.target.value });
    }
  };

  const handleAdd = () => {
    if (
      orderData.name === "" ||
      orderData.email === "" ||
      orderData.number === "" ||
      orderData.address === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    AddOrder({
      ...orderData,
      serialNumber: null,
      orderNumber: generateRandomOrderNumber(),
    });
    setOrderData({ name: "", email: "", number: "", address: "" });
  };

  const generateRandomOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div>
      <div className="heading">Add User</div>
      <form>
        <div className="input-box">
          <label htmlFor="/">Name</label>
          <input
            type="text"
            value={orderData.name}
            onChange={handleChange}
            placeholder="Enter name"
            name="Name"
            id="name"
          />
        </div>
        <div className="input-box">
          <label htmlFor="/">Email</label>
          <input
            type="email"
            value={orderData.email}
            onChange={handleChange}
            name="Email"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="input-box">
          <label htmlFor="/">Number</label>
          <input
            type="number"
            onChange={handleChange}
            name="Number"
            id="number"
            placeholder="Enter phone number"
            value={orderData.number}
          />
        </div>
        <div className="input-box">
          <label htmlFor="/">Address</label>
          <input
            type="text"
            onChange={handleChange}
            name="Address"
            id="address"
            placeholder="Enter your Address"
            value={orderData.address}
          />
        </div>
      </form>

      <button className="btn" onClick={handleAdd}>
        Add User
      </button>
    </div>
  );
}
 */
import React, { useState } from "react";


export default function AddOrder({ addOrder }) {
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleAdd = () => {
    if (
      orderData.name === "" ||
      orderData.email === "" ||
      orderData.number === "" ||
      orderData.address === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    addOrder({
      data: { ...orderData },
      serialNumber: null,
      orderNumber: generateRandomOrderNumber(),
    });
    setOrderData({ name: "", email: "", number: "", address: "" });
  };

  const generateRandomOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div className="container">
      <div className="heading">Add Order</div>
      <form>
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={orderData.name}
            onChange={handleChange}
            placeholder="Enter name"
            name="name"
            id="name"
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={orderData.email}
            onChange={handleChange}
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="input-box">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            onChange={handleChange}
            name="number"
            id="number"
            placeholder="Enter phone number"
            value={orderData.number}
          />
        </div>
        <div className="input-box">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            onChange={handleChange}
            name="address"
            id="address"
            placeholder="Enter your Address"
            value={orderData.address}
          />
        </div>
      </form>

      <button className="btn" onClick={handleAdd}>
        Add Order
      </button>
    </div>
  );
}
