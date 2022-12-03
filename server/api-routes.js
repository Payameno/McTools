const express = require("express");
const router = express.Router();

//Database connection
const db = require('./database');

//Get all machinery from products
router.get("/machinery", (req, res) => {
  const query = `
  SELECT 
      products.product_id,
      products.name,
      products.description,
      products.brand,
      products.quantity,
      products.price_cents,
      products.category,
      products.instock,
      product_pictures.url AS picture_url
    FROM products
    INNER JOIN product_pictures
      ON products.id = product_pictures.product_id
    WHERE
    category LIKE 'machinery'
    GROUP BY 
    products.product_id
    ;`;
  return db
    .query(query)
    .then(({ rows: machinery }) => {
      res.json(machinery);
    })
    .catch(err => console.log("err from /machinery", err))
});

//Retrieve all the inspection tools 
router.get("/inspection", (req, res) => {
  const query = `
  SELECT 
      products.product_id,
      products.name,
      products.description,
      products.brand,
      products.quantity,
      products.price_cents,
      products.category,
      products.instock,
      product_pictures.url AS picture_url
    FROM products
    INNER JOIN product_pictures
      ON products.id = product_pictures.product_id
    WHERE
    category LIKE 'inspection'
    GROUP BY 
    products.product_id
    ;`;
  return db
    .query(query)
    .then(({ rows: inspection }) => {
      res.json(inspection);
    })
    .catch(err => console.log("err from /inspection", err))
});

//Retrieve all handtools 
router.get("/handtools", (req, res) => {
  const query = `
  SELECT 
      products.product_id,
      products.name,
      products.description,
      products.brand,
      products.quantity,
      products.price_cents,
      products.category,
      products.instock,
      product_pictures.url AS picture_url
    FROM products
    INNER JOIN product_pictures
      ON products.id = product_pictures.product_id
    WHERE
    category LIKE 'handtools'
    GROUP BY 
    products.product_id
    ;`;
  return db
    .query(query)
    .then(({ rows: handtools }) => {
      res.json(handtools);
    })
    .catch(err => console.log("err from /handtools", err))
});

//Retrieve all products
router.get("/all-products", (req, res) => {
  const query = `
  SELECT 
      products.product_id,
      products.name,
      products.description,
      products.brand,
      products.quantity,
      products.price_cents,
      products.category,
      products.instock,
      product_pictures.url AS picture_url
    FROM products
    INNER JOIN product_pictures
      ON products.id = product_pictures.product_id
    GROUP BY 
    products.product_id
    ;`;
  return db
    .query(query)
    .then(({ rows: products }) => {
      res.json(products);
    })
    .catch(err => console.log("err from /all-products", err))
});

module.exports = router;