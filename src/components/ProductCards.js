import React from "react";
import './styles/ProductCard.css';

export function ProductCardView(props) {
    return (
        <div className="product-card-sec1">
            <h2>{props.title}</h2>
            <div className="product-card__image" style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
            }}
            >
            </div>
            <a href="#">See more</a>
        </div >

    )
};


export function ProductCardDet(product) {
    return (
        <div className="product-card-sec2">
            <div className="product-card__discount">
                <img className="product-card__image" src={product.image} alt={product.title} />
                {product.discount &&
                    <span >{product.discount}% off</span>}
                {product.discount &&
                    <p >Deal</p>}
            </div>
            <div className="product-card__info">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__price">${product.price}</p>
                <div className="product-card__rating">
                    {Array(product.rating)
                        .fill()
                        .map((_, index) => (
                            <span key={index} className="product-card__star"></span>
                        ))}
                    <p className="product-card__rating-count">{product.ratingCount} ratings</p>
                </div>

                <button className="product-card__button">Add to Cart</button>
            </div>
        </div >
    );
};

