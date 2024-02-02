import React, { useState } from "react";
import BookingList from "./BookingList";
import AddBooking from "./AddBooking";

export default function BookingPage() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const removeBooking = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <h2>Booking List</h2>
          <BookingList booking={bookings} removeBooking={removeBooking} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Add Booking</h2>
          <AddBooking addBooking={addBooking} />
        </div>
      </div>
    </div>
  );
}
