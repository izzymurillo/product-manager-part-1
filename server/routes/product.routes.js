// // // vvvvv FROM THE LEARN PLATFORM vvvvv //
const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);

    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products', ProductController.createProduct);
}

// // vvvvvv CISO'S WAY vvvvvv //
// const { message } = require("../controllers/product.controller");

// const express = require("express");
// const productRouter = express.Router();

// productRouter
//   .route("/")
//   .get(message);

// module.exports = productRouter;


