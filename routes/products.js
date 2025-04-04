const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: 'El nombre del producto es obligatorio' });
  }
  
  if (!req.body.price || req.body.price < 0) {
    return res.status(400).json({ message: 'El precio debe ser un número positivo' });
  }
  
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    inStock: req.body.inStock,
    imageUrl: req.body.imageUrl
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ 
      message: 'Producto eliminado correctamente',
      deletedProduct: {
        id: product._id,
        name: product.name,
        deletedAt: new Date()
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;