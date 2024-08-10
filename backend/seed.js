const mongoose = require("mongoose");
const Product = require("./models/Product"); // Adjust the path as necessary
require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const products = [
  {
    name: "Apple MacBook Air M1",
    price: 999.99,
    description:
      "The Apple MacBook Air with M1 chip offers incredible performance, a stunning 13.3-inch Retina display, and up to 18 hours of battery life. It's lightweight and perfect for professionals on the go.",
  },
  {
    name: "Dell XPS 13",
    price: 1199.99,
    description:
      "The Dell XPS 13 is a compact and powerful laptop with a 13.4-inch FHD+ display, Intel Core i7 processor, 16GB RAM, and 512GB SSD. It features a sleek design and long battery life.",
  },
  {
    name: "HP Spectre x360",
    price: 1299.99,
    description:
      "The HP Spectre x360 is a versatile 2-in-1 laptop with a 13.3-inch touch display, Intel Core i7 processor, 16GB RAM, and 512GB SSD. It offers a premium build quality and excellent performance.",
  },
];

// Insert data into the database
const seedProducts = async () => {
  try {
    await Product.insertMany(products);
    console.log("Dummy products inserted successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting products:", err);
    mongoose.connection.close();
  }
};

seedProducts();
