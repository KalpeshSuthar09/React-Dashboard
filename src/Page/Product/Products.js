import React from "react";
import "./product.css";
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";


function Product({result}) {
  const [details, setDetails] = useState([]);

  const detailsPage = (Product) => {
    setDetails([{ ...Product }]);
  };

  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
}

export default Product;
