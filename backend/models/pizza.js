import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  precio: Number,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const pizza = mongoose.model("pizza", pizzaSchema);

export default pizza;
