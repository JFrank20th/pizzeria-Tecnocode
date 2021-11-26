import mongoose from "mongoose";

const pizzasizeSchema = new mongoose.Schema({
    tamaño : String,
    precio : Number,
  });
  
  const pizzasize = mongoose.model("pizzasize", pizzasizeSchema);
  
  export default pizzasize;