import React from 'react';
import { useState } from 'react';
import Recommended from '../Recommended/Recommended';
import products from "../db/data";
import Products from './Products';
import Card from '../components/Card'
import SidebarIcons from '../SidebarIcons/Sidebar'

const ProductShow = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

  //input Filter
  const [query, setQuery] = useState("");


  const filteredItems = products.filter((Product) =>
    Product.title.indexOf(query) !== -1
  );

  //Radio Filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Button Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function fillteredData(Products, selected, query) {
    let filterProducts = Products;

    //filtering input items
    if (query) {
      filterProducts = filteredItems;
    }

    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filterProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = fillteredData(products, selectedCategory, query);
    return (
        <>
        <SidebarIcons handleChange={handleChange} />
        <Products result={result}/>
        <Recommended handleClick={handleClick} />
        </>
    );
};

export default ProductShow;