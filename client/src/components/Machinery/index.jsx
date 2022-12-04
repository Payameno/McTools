import React, { useEffect, useState } from "react";
import Product from "../Product";

const Machinery = (props) => {
  const {machinery} = props;

  const machineryInfo = Object.values(machinery).map((machinery, index) => {
    return (
      <Product
        key={index}
        id={machinery.product_id}
        name={machinery.name}
        description={machinery.description}
        brand={machinery.brand}
        quantity={machinery.quantity}
        category={machinery.category}
        price={machinery.price_cents}
        instock={machinery.instock}
        photo={machinery.pictures_url} />
    )
  })

  return (
    <>
      <h3 className="page-title">Machinery</h3>
      <div className="grid-container">
      {machineryInfo}
      </div>
    </>
  )
}

export default Machinery;