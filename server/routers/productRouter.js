const { Router } = require('express');
const product = require('../controllers/product');
const router = Router();

router.route('/')
    .get(product.getAllProduct)
    .post(product.createProduct)

router.route('/:id')
    .get(product.getProduct)
    .patch(product.updateProduct)
    .delete(product.deleteProduct)

module.exports = router