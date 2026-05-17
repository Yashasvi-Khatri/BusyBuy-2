import React, { useState } from "react";
import styles from "./ProductImage.module.css";

// Product Image Component
const ProductImage = ({ image }) => {
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    console.error("Failed to load image:", image);
    setImgError(true);
  };

  if (!image || imgError) {
    return (
      <div className={styles.imageContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
        <span style={{ color: '#666', fontSize: '14px' }}>No image available</span>
      </div>
    );
  }

  return (
    <div className={styles.imageContainer}>
      <img
        src={image}
        alt="Product"
        width="100%"
        height="100%"
        style={{ objectFit: "contain", aspectRatio: 1 }}
        onError={handleImageError}
        onLoad={() => console.log("Image loaded successfully:", image)}
      />
    </div>
  );
};

export default ProductImage;
