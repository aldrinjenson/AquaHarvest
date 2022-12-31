const mongoose = require("mongoose");

const TankSchema = new mongoose.Schema({
  userToken: { type: String, required: true },
  tankName: { type: String, required: true },
  fish: [
    {
      fishName: { type: String, required: true },
      // fishStartDate: { type: String, required: true },
    },
  ],
  totalNumberOfFish: { type: Number, required: true },
});

module.exports = mongoose.model("Tank", TankSchema);
