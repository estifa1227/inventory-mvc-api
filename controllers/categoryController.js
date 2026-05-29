const categories = require("../models/categoryModel");

// GET all categories
const getCategories = (req, res) => {
  res.json(categories);
};

// CREATE category
const createCategory = (req, res) => {
  const { name } = req.body;

  const newCategory = {
    id: categories.length + 1,
    name
  };

  categories.push(newCategory);

  res.status(201).json({
    message: "Category created",
    category: newCategory
  });
};

module.exports = {
  getCategories,
  createCategory
};