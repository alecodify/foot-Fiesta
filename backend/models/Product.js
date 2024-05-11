const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageSrc: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, default: 0 },
  newTag: { type: Boolean, default: false },
  discount: { type: Number, default: 0 },
  availability: { type: String, default: 'In Stock' },
  description: { type: String },
  vendor: { type: String },
  sku: { type: String },
  categories: [{ type: String }],
  tags: [{ type: String }],
  colors: [{ type: String }],
  sizes: [{ type: String }],
  images: [{ type: String }],
});

module.exports = mongoose.model('Product', productSchema);
