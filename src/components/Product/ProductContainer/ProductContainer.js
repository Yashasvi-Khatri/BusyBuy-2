import React from "react";
import styles from "./ProductContainer.module.css";

// Product card container
const ProductContainer = ({ children, onCart }) => {
  return <div className={`${styles.productContainer} ${onCart ? styles.cartItem : ''}`}>{children}</div>;
};

export default ProductContainer;
