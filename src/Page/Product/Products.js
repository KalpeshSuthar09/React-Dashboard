import React, { useState } from "react";
import data from "../db/data";
import "./product.css";

const Products = () => {
  const [detail, setDetail] = useState();
  const [close, setClose] = useState(false)
  const detailPage = (Products) => {
    setDetail([{ ...Products }]);
    setClose(true)
  };
  return (
    <>
    {
      close ? <div className="detail-container">
      <div className="detail-content">
        <button onClick={() => setClose(false)}>Close</button>
        {detail.map((x) => {
          return (
            <>
              <div className="detail-info">
                <div className="img-box">
                  <img src={x.img} alt={x.title} />
                </div>
                <div className="product-detail">
                  <h3>{x.title}</h3>
                  <h3>${x.newPrice}</h3>
                  <p>{x.company}</p>
                  <button>Add to cart</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div> : null
    }
      
      <div className="container">
        {data.map((curElm) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <div className="img-box">
                    <img src={curElm.img} alt={curElm.title} />
                  </div>
                  <div className="details">
                    <div className="info">
                      <h3>{curElm.title}</h3>
                      <h3>${curElm.newPrice}</h3>
                    </div>
                    <button onClick={() => detailPage(curElm)}>View</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;


