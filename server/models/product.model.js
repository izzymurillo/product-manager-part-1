const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    description: String,
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", productSchema);

// ---------------------------------------------------------
// // vvvvvv CISO'S WAY vvvvvv //
// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;
