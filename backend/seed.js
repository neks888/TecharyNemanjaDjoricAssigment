const mongoose = require("mongoose");
const Product = require("./models/product"); // Adjust the path as needed

// Connect to your MongoDB database
mongoose
  .connect("mongodb://localhost:27017/anna-mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Example product data to seed
const products = [
  {
    productId: new mongoose.Types.ObjectId(),
    name: "Apple MacBook Air M1",
    price: 999.99,
    quantity: 100,
    description:
      "The Apple MacBook Air with M1 chip offers incredible performance with an ultra-light design.",
  },
  {
    productId: new mongoose.Types.ObjectId(),
    name: "Dell XPS 13",
    price: 1199.99,
    quantity: 50,
    description:
      "The Dell XPS 13 features a stunning InfinityEdge display and powerful performance in a sleek package.",
  },
  {
    productId: new mongoose.Types.ObjectId(),
    name: "HP Spectre x360",
    price: 1299.99,
    quantity: 30,
    description:
      "The HP Spectre x360 is a versatile 2-in-1 laptop with a long battery life and beautiful design.",
  },
  {
    productId: new mongoose.Types.ObjectId(),
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1399.99,
    quantity: 20,
    description:
      "The Lenovo ThinkPad X1 Carbon is a business laptop with a durable build and powerful performance.",
  },
  {
    productId: new mongoose.Types.ObjectId(),
    name: "Microsoft Surface Laptop 4",
    price: 1499.99,
    quantity: 25,
    description:
      "The Microsoft Surface Laptop 4 combines style, speed, and a touchscreen display in a premium design.",
  },
];

// Function to seed the database with products
async function seedDB() {
  try {
    await Product.deleteMany({}); // Clear existing products

    await Product.insertMany(products); // Seed products
    console.log("Products seeded successfully");

    mongoose.connection.close(); // Close the connection when done
  } catch (err) {
    console.error("Error seeding data:", err);
    mongoose.connection.close();
  }
}

// Run the seed function
seedDB();
