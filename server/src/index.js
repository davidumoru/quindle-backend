require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const glowr = require("glowr");

const connectDB = require("./configs/database");
const userRoutes = require("./routes/user.routes");
const matchingRoutes = require("./routes/matching.routes");

const app = express();
app.use(cors());

app.use(bodyParser.json());

// connecting to db here
connectDB(process.env.MONGO_URI);

// Routes
app.use("/auth", userRoutes);
app.use("/api", matchingRoutes);

// Defining a route for the root URL ("/")
app.get("/", (req, res) => {
  res.status(200).json({
    message: "I am running",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(glowr(`Server is running on port ${port}`, `bg.green`));
});
