const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: {type: String, require: true},
    price: {type: String, require: true},
    rating: {type: Number, require: true}, 
    img: {type: String, require: true}, 
    category: { type: String, enum: ['men', 'women', 'kids']} // Ensures that the category value is one of these three options: 'men', 'women', or 'kids'
});

module.exports = mongoose.model('Shoe', shoeSchema);

