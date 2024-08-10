const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { products, shippingDetails, totalPrice } = req.body;

    const newOrder = new Order({
      products,
      shippingDetails,
      totalPrice,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createOrder,
};
