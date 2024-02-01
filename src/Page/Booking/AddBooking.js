import React, { useState } from "react";

export default function AddBooking({ addBooking }) {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "Name") {
      setBookingData({ ...bookingData, name: e.target.value });
    } else if (e.target.email === "Email") {
      setBookingData({ ...bookingData, email: e.target.value });
    } else if (e.target.number === "Number") {
      setBookingData({ ...bookingData, number: e.target.value });
    } else {
      setBookingData({ ...bookingData, address: e.target.value });
    }
  };

  const handleAdd = () => {
    if (
    bookingData.name === "" ||
    bookingData.email === "" ||
    bookingData.number === "" ||
    bookingData.address === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    AddBooking({
      ...bookingData,
      serialNumber: null,
      orderNumber: generateRandomOrderNumber(),
    });
    setBookingData({ name: "", email: "", number: "", address: "" });
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
            value={bookingData.name}
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
            value={bookingData.email}
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
            value={bookingData.number}
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
            value={bookingData.address}
          />
        </div>
      </form>

      <button className="btn" onClick={handleAdd}>
        Add Booking
      </button>
    </div>
  );
}
