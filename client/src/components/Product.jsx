import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, id, description, brand, quantity, price, category, instock, photos } = props

  return (
    <>
      <section className="product-list">
        <Link to={`/product/${id}`} className="link">
          <div className="product-img">
            <img src={photos[0]} alt="product-img"
              onMouseEnter={e => e.currentTarget.src = photos[1]}
              onMouseLeave={e => e.currentTarget.src = photos[0]}></img>
          </div>

          <div className="product-title">{name}</div>
          <div className="product-description">{description}</div>
          <div className="product-brand">{brand}</div>
          <div className="product-quantity">{quantity}</div>
          <div className="product-category">{category}</div>
          <div className="product-instock">{instock}</div>
          <div className="product-price">C ${price / 100}</div>
        </Link>
      </section>
    </>
  )
}

export default Product;
