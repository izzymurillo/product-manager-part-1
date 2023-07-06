// vvvvv FROM THE LEARN PLATFORM vvvvv //
const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World!!!",
  });
};

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allDaProducts) => {
      res.json({ products: allDaProducts });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// The method below is new
module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

// --------------------------------------------------- //
// // vvvvvv CISO'S WAY vvvvvv //
// const Product = require("../models/product.model");

// const message = (req, res) => {
//   res.json("Hello World");
// };

// const create = (req, res) => {
//   Product.create(req.body)
//     .then(product => res.status(201).json(product))
//     .catch(err => res.status(400).json(err));
// };

// module.exports = { message, create };
