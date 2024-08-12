import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addToCart } from "../utils/cart";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const msg = addToCart(product);
      setMessage(msg);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-detail">
      {message && <p className="product-message">{message}</p>}
      <h1 className="product-name">{product.name}</h1>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <button className="btn btn-add" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
