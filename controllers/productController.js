const products = require("../models/productModel");

// GET all products
const getProducts = (req, res) => {
  res.json(products);
};

// GET single product
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
};

// CREATE product
const createProduct = (req, res) => {
  const { name, price, categoryId, supplierId } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    categoryId,
    supplierId
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created",
    product: newProduct
  });
};

// UPDATE product
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, price, categoryId, supplierId } = req.body;

  product.name = name || product.name;
  product.price = price || product.price;
  product.categoryId = categoryId || product.categoryId;
  product.supplierId = supplierId || product.supplierId;

  res.json({
    message: "Product updated",
    product
  });
};

// DELETE product
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  products.splice(index, 1);

  res.json({
    message: "Product deleted"
  });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};