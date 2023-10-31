require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const connectDB = require("./configs/database");
const userRoutes = require('./routes/user.routes')
const matchingRoutes = require('./routes/matching.routes');

const app = express();
app.use(cors());

app.use(bodyParser.json());

// connecting to db here
connectDB(process.env.MONGO_URI);

// Routes
app.use('/auth', userRoutes)
app.use('/api', matchingRoutes);

// Defining a route for the root URL ("/")
app.get("/", (req, res) => {
  res.status(200).json({
    message: "I am running",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
