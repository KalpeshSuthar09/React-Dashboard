import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import AddBooking from "./AddBooking";
import BookingList from "./BookingList";

const Booking = () => {
  const localStorageKey = "order";
  const [booking, setBooking] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(booking));
  }, [booking]);

  const addBooking = (data) => {
    setBooking([...booking, { id: uuid4(), data }]);
  };

  const removeBooking = (id) => {
    const updatedList = booking.filter((val) => {
      return val.id !== id;
    });
    setBooking(updatedList);
  };
  return (
    <>
      <div>User</div>
      <AddBooking addBooking={addBooking} />
      <BookingList booking={booking} removeBooking={removeBooking} />
    </>
  );
};

export default Booking;
