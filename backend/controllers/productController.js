const Product = require('../models/Product');

module.exports = {
    addProduct: async (req, res, next) => {
        const product = new Product(req.body);
        try {
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getProducts: async (req, res, next) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getProduct: async (req, res, next) => {
        const productId = req.params.id
        try {
            const product = await Product.findById(productId, {});

            res.status(200).json(product)
        } catch (error) {
            return next(error)
        }
    },

    updateProduct: async (req, res, next) => {
        const productId = req.params.id;
        const updateData = req.body;
        try {
            const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true });
            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            return next(error);
        }

    },

    deleteProduct: async (req, res, next) => {
        const productID = req.params.id;
        try {
            await Product.findByIdAndDelete(productID)
            res.status(200).json({ status: true, message: "product item successfully deleted" })
        } catch (error) {
            return next(error)
        }
    }

}