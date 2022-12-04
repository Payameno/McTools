import React, { useEffect, useState } from "react";
import Product from "../Product";

const Inspection = (props) => {
  const {inspection} = props;

  const inspectionInfo = Object.values(inspection).map((inspection, index) => {
    return (
      <Product
        key={index}
        id={inspection.product_id}
        name={inspection.name}
        description={inspection.description}
        brand={inspection.brand}
        quantity={inspection.quantity}
        category={inspection.category}
        price={inspection.price_cents}
        instock={inspection.instock}
        photo={inspection.pictures_url} />
    )
  })

  return (
    <>
      <h3 className="page-title">Inspection</h3>
      <div className="grid-container">
      {inspectionInfo}
      </div>
    </>
  )
}

export default Inspection;