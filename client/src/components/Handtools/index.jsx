import React, { useEffect, useState } from "react";
import Product from "../Product";

const Handtools = (props) => {
  const {handtools} = props;

  const handtoolsInfo = Object.values(handtools).map((handtool, index) => {
    return (
      <Product
        key={index}
        id={handtool.product_id}
        name={handtool.name}
        description={handtool.description}
        brand={handtool.brand}
        quantity={handtool.quantity}
        category={handtool.category}
        price={handtool.price_cents}
        instock={handtool.instock}
        photo={handtool.pictures_url} />
    )
  })

  return (
    <>
      <h3 className="page-title">Handtools</h3>
      <div className="grid-container">
      {handtoolsInfo}
      </div>
    </>
  )
}

export default Handtools;