import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  name: String,
  cantidad: Number,
  dbStatus: Boolean,
  registerDate: { type: Date, default: Date.now },
});

const pedido = mongoose.model("pedidos", pedidoSchema);
export default pedido;