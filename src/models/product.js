const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  isRecyclable: {
    type: Boolean,
    required: true,
  },
});

const product = mongoose.model("Product", ProductSchema);

module.exports = product;