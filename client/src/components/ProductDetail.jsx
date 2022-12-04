import React from "react";
import { useParams } from "react-router-dom";
import ImageSlider from './ImageSlider'

const ProductDetail = (props) => {
  const { userId } = useParams();
  const { products } = props;
  const productId = userId - 1;

  if (!products) {
    return null;
  }

  return (
    <div className="product-info">
      <section className="product-details">
        <ImageSlider photos={products[productId].pictures_url} />

        <div className="product-detail-info">
          <div className="product-detail-name">
            <h2>{products[productId].name}</h2>
          </div>

          <div className="product-detail-price">
            C ${products[productId].price_cents / 100}
          </div>

          <div className="product-detail-cart">
            Add to cart
          </div>

          <div className="description">
            {products[productId].description}
          </div>

          <div className="product-detail-material">
            <div>
              <b>Brand:</b> {products[productId].brand}
            </div>

            <div>
              <b>quantity:</b> {products[productId].quantity}
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default ProductDetail;