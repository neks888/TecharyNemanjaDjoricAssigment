import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/cart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-actions">
            <Link to={`/product/${product._id}`}>
              <button className="btn btn-details info">View Details</button>
            </Link>
            <button className="btn btn-add" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
