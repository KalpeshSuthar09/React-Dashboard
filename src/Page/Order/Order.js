import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import AddOrder from "./AddOrder";
import OrderList from "./OrderList";

const Order = () => {
  const localStorageKey = "order";
  const [order, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(order));
  }, [order]);

  const addOrder = (data) => {
    setOrder([...order, { id: uuid4(), ...data }]);
  };

  const removeOrder = (id) => {
    const updatedList = order.filter((val) => {
      return val.id !== id;
    });
    setOrder(updatedList);
  };
  return (
    <>
      <div>User</div>
      <AddOrder addOrder={addOrder} />
      <OrderList order={order} removeOrder={removeOrder} />
    </>
  );
};

export default Order;
