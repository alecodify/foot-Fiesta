const Shoe = require('../models/Shoe');

module.exports = {
    addShoe: async (req, res, next) => {
        const shoe = new Shoe(req.body);
        try {
            const newShoe = await shoe.save();
            res.status(201).json(newShoe);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getShoes: async (req, res, next) => {
        try {
            const shoes = await Shoe.find();
            res.json(shoes);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getShoe: async (req, res, next) => {
        const shoeID = req.params.id
        try {
            const shoe = await Shoe.findById(shoeID, {});

            res.status(200).json(shoe)
        } catch (error) {
            return next(error)
        }
    },

    getShoeByCategory: async (req, res, next) => {
        const category = req.params.category || req.body.category; 

        try {
            const shoes = await Shoe.find({ category: category });

            if (shoes.length > 0) {
                res.status(200).json(shoes);
            } else {
                res.status(404).json({ message: 'No shoes found for the specified category.' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },


    updateShoe: async (req, res, next) => {
        const shoeID = req.params.id;
        const updateData = req.body;
        try {
            const updatedShoe = await Shoe.findByIdAndUpdate(shoeID, updateData, { new: true });
            if (!updatedShoe) {
                return res.status(404).json({ message: "Shoe not found" });
            }
            res.status(200).json(updatedShoe);
        } catch (error) {
            return next(error);
        }
    },

    deleteShoe: async (req, res, next) => {
        const shoeID = req.params.id;
        try {
            await Shoe.findByIdAndDelete(shoeID)
            res.status(200).json({ status: true, message: "shoe item successfully deleted" })
        } catch (error) {
            return next(error)
        }
    }
}