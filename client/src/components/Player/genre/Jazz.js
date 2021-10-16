import React from "react";
import { CartState } from "../../../Context/Context";
import SingleJazz from "./SingleJazz";

const Jazz = ({ item }) => {
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
    <div>
      <div className="home">
        <div className="productContainer">
          {transformProducts().map((item) => {
            return <SingleJazz item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Jazz;
