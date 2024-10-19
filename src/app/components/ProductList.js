import React from "react";
import ProductItem from "./ProductItems";
import products from "../products";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem
      price={product.price}
      name={product.name}
      image={product.image}
    />
  ));
  return <>{productList}</>;
};

export default ProductList;
