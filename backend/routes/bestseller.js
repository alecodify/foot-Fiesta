const router = require("express").Router();
const bestSellerController = require("../controllers/bestsellerController");

router.post("/", bestSellerController.addShoe);
router.get("/", bestSellerController.getShoes);
router.get("/:id", bestSellerController.getShoe);
router.get("/category/:category", bestSellerController.getShoeByCategory);
router.put("/:id", bestSellerController.updateShoe);
router.delete("/:id", bestSellerController.deleteShoe);

module.exports = router;