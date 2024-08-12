import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import "./index.css";

const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">My Store</div>
        <div className="navbar-links">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/cart" className="nav-link" activeClassName="active">
            Cart
          </NavLink>
          <NavLink to="/checkout" className="nav-link" activeClassName="active">
            Checkout
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
};

export default App;
