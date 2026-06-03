import React from "react";
import styles from "./ProductGrid.module.css";

// Component mainly for styling purpose
const ProductGrid = ({ children, style, onCart }) => {
  return (
    <div className={`${styles.grid} ${onCart ? styles.cartList : ''}`} style={{ ...style }}>
      {children}
    </div>
  );
};

export default ProductGrid;
