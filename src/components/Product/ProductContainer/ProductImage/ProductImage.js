import React, { useState } from "react";
import styles from "./ProductImage.module.css";

// Product Image Component
const ProductImage = ({ image, onCart }) => {
  const [imgError, setImgError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  const handleImageError = () => {
    console.error("Failed to load image:", image);
    setImgError(true);
    
    // Try to use a fallback image service
    if (!useFallback) {
      setUseFallback(true);
    }
  };

  const getFallbackImage = () => {
    // Use a reliable placeholder image service
    // Using a simple colored placeholder with product icon
    const colors = ['f5f5f0', 'e8e4dc', 'd9d4c8', 'ccc4b5'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    return `https://placehold.co/300x300/${colors[colorIndex]}/1C1C1E?text=Product`;
  };

  if (!image || (imgError && !useFallback)) {
    return (
      <div className={styles.imageContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f0' }}>
        <span style={{ color: '#666', fontSize: '14px' }}>No image available</span>
      </div>
    );
  }

  const imageSrc = useFallback ? getFallbackImage() : image;

  return (
    <div className={`${styles.imageContainer} ${onCart ? styles.cartImage : ''}`}>
      <img
        src={imageSrc}
        alt="Product"
        width="100%"
        height="100%"
        style={{ objectFit: useFallback ? "contain" : "contain", aspectRatio: 1 }}
        onError={handleImageError}
        onLoad={() => {
          if (!useFallback) {
            console.log("Image loaded successfully:", image);
          }
        }}
      />
    </div>
  );
};

export default ProductImage;
