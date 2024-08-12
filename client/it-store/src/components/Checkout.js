import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
      alert("You can't place the order(your cart is empty");
      return;
    }

    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    try {
      const order = {
        products: cartItems,
        shippingDetails,
        totalPrice,
      };

      console.log(order);

      await axios.post("http://localhost:5000/api/orders", order);
      localStorage.removeItem("cart");
      alert("Order placed successfully!");
    } catch (error) {
      alert("Error placing order");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h1 className="form-title">Checkout</h1>
      <input
        type="text"
        name="name"
        value={shippingDetails.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
        className="form-input"
      />
      <input
        type="email"
        name="email"
        value={shippingDetails.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
        className="form-input"
      />
      <input
        type="text"
        name="address"
        value={shippingDetails.address}
        onChange={handleInputChange}
        placeholder="Address"
        required
        className="form-input"
      />
      <input
        type="text"
        name="phone"
        value={shippingDetails.phone}
        onChange={handleInputChange}
        placeholder="Phone"
        required
        className="form-input"
      />
      <button type="submit" className="form-button">
        Place Order
      </button>
    </form>
  );
};

export default Checkout;
