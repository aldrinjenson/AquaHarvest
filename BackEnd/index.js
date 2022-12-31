const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const farmController = require("./controllers/farmController");
const TankController = require("./controllers/tankController");
const FishController = require("./controllers/fishController");
const TaskController = require("./controllers/taskController");
const Tank = require("./models/Tank");
mongoose
  .connect(
    "mongodb+srv://hanna:passwordsss@cluster0.0b10im5.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"));

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/tank", async (req, res) => {
  const newTank = new Tank(req.body);
  try {
    const savedTank = await newTank.save();
    res.status(200).json(savedTank);
  } catch (err) {
    res.status(500).json(err);
  }
});

TankController(app);
FishController(app);
TaskController(app);
farmController(app);

app.listen(process.env.PORT || 3000);
console.log("You are listening to port 3000");
