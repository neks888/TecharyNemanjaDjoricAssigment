const mongoose = require("mongoose");

// Define the schema for individual products in the order
const productSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming productId is an ObjectId that references a Product model
    required: true,
    ref: "Product", // Add ref to Product model if you want to use population later
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Define the schema for shipping details
const shippingDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

// Define the main schema for the order
const orderSchema = new mongoose.Schema({
  products: [productSchema], // Array of products
  shippingDetails: shippingDetailsSchema, // Shipping details
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Add default value for updatedAt
  },
});

// Middleware to set the updatedAt field before saving
orderSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the Order model from the schema
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
