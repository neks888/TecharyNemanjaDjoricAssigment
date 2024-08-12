import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
    calculateTotalPrice(cartItems);
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleDelete = (productId) => {
    // Filter out the product with the matching productId
    const updatedCart = cart.filter((item) => item.productId !== productId);

    // Update the cart state
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.map((item) => (
        <div key={item.productId} className="cart-item">
          <h2 className="item-name">{item.name}</h2>
          <p className="item-quantity">Quantity: {item.quantity}</p>
          <p className="item-price">Price: ${item.price.toFixed(2)}</p>
          <button
            className="btn info"
            onClick={() => handleDelete(item.productId)}
          >
            Remove
          </button>
        </div>
      ))}
      <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
      <Link to="/checkout">Prossed to Checkout</Link>
    </div>
  );
};

export default Cart;
