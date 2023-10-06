import React from "react";
import { ProductCardView, ProductCardDet } from './ProductCards.js';
import bg_img from '../media_db/images/sec1_bg2.jpg';

import prodjs from '../media_db/products.js';
import prodjs_sec1 from '../media_db/products_sec1.js';


export default function Main() {

    const prod_elem_sec1 = prodjs_sec1.map((val) => {
        return (
            <ProductCardView
                key={val.id}
                {...val}
            />
        )
    })
    const prod_elem_sec2 = prodjs.map((val) => {
        return (
            <ProductCardDet
                {...val}
            /* title={val.title}
            image={val.image}
            price={val.price}
            discount={val.discount}
            rating={val.rating}
            ratingCount={val.ratingCount} */
            />
        )
    })
    return (
        <div className="main">
            <div className="section1" style={{
                backgroundImage: `url(${bg_img})`,
                backgroundSize: 'cover',
            }} >

                <div className="home-msg">
                    <p>
                        You are on amazon.com. You can also shop on Amazon India for millions of products with fast local
                        delivery. <a href="#">Click here to go to amazon.in</a>
                    </p>
                </div>
            </div>
            <div className="shop-section-1">
                {prod_elem_sec1}
            </div >

            <div className="shop-section-2">
                {prod_elem_sec2}
            </div >
        </div >
    )
}