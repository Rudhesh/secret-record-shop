import React from "react";
import SingleProduct from "./components/Player/SingleProduct";
import { CartState } from "./Context/Context";
import "./home.css";
export const Home = () => {
  const {
    state: { songs },
    productState: { searchQuery, sort },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = songs;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.artist.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <div className="productContainer">
        {transformProducts().map((item) => {
          return <SingleProduct item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
