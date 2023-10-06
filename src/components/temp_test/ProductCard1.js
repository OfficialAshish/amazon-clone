import React from 'react';
import './ProductCard.css'; // Import the CSS file for styling

export function ProductCard(product) {
  return (
    <div className="product-card">
      {/* <img src={prod_img} alt={product.title} className="product-image" /> */}
      {/* <img src={product.image} alt={product.title} className="product-image" /> */}
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          <span className="rating">{product.rating}</span>
          <span className="rating-count">{product.ratingCount}</span>
        </div>
        <p className="product-price">{product.price}</p>
        {/* <p className="product-availability">{product.availability}</p> */}
        <p className="product-discount">{product.discount}</p>
      </div>

    </div>

  );
};
// export default ProductCard;




/* ------------      Product css --------------- */
/* .product-card {
    width: 250px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 16px;
    position: relative;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  
  .product-details {
    position: relative;
  }
  
  .product-title {
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .product-rating {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .rating {
    color: #f0c040;
    margin-right: 4px;
  }
  
  .product-price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .product-availability {
    font-size: 14px;
    font-style: italic;
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    padding: 4px 8px;
    border-radius: 4px;
  }
  
  .product-discount {
    font-size: 14px;
    color: #e4572e;
    margin-bottom: 8px;
  } */