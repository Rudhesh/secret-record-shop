import React from "react";
import { CartState } from "../../../Context/Context";
import SingleRock from "./SingleRock";

const Rock = () => {
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
            return <SingleRock item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Rock;
