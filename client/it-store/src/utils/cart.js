export const addToCart = (product) => {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cartItems.findIndex(
    (item) => item.productId === product._id
  );

  if (existingProductIndex !== -1) {
    cartItems[existingProductIndex] = {
      ...cartItems[existingProductIndex],
      quantity: cartItems[existingProductIndex].quantity + 1,
    };
  } else {
    cartItems.push({
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
  return `Added ${product.name} to cart`;
};
