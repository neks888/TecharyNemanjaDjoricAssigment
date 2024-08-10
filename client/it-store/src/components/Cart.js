import React, { useState, useEffect } from "react";

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

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.productId}>
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
      <h3>Total Price: {totalPrice}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
