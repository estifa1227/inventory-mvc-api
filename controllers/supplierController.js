const suppliers = require("../models/supplierModel");

// GET all suppliers
const getSuppliers = (req, res) => {
  res.json(suppliers);
};

// CREATE supplier
const createSupplier = (req, res) => {
  const { name } = req.body;

  const newSupplier = {
    id: suppliers.length + 1,
    name
  };

  suppliers.push(newSupplier);

  res.status(201).json({
    message: "Supplier created",
    supplier: newSupplier
  });
};

module.exports = {
  getSuppliers,
  createSupplier
};