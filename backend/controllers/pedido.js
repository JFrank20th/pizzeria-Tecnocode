import pedido from "../models/pedido.js";

const registerPedido = async (req, res) => {
  if (!req.body.name || !req.body.cantidad)
    return res.status(400).send({ message: "Incomplete data" });

  const existingPedido = await pedido.findOne({ name: req.body.name });
  if (existingPedido)
    return res.status(400).send({ message: "The pedido already exist" });

  const pedidoSchema = new pedido({
    name: req.body.name,
    cantidad: req.body.cantidad,
    dbStatus: true,
  });

  const result = await pedidoSchema.save();
  return !result
    ? res.status(400).send({ message: "Failed to register pedido" })
    : res.status(200).send({ result });
};

const listPedido = async (req, res) => {
  const pedidoList = await pedido.find();
  return pedidoList.length == 0
    ? res.status(400).send({ message: "Empty pedido list" })
    : res.status(200).send({ pedidoList });
};

const updatePedido = async (req, res) => {
  if (!req.body.name || !req.body.cantidad)
    return res.status(400).send({ message: "Incomplete data" });

  const existingPedido = await pedido.findOne({
    name: req.body.name,
    cantidad: req.body.cantidad,
  });
  if (existingPedido)
    return res.status(400).send({ message: "The pedido already exist" });

  const pedidoUpdate = await pedido.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    cantidad: req.body.cantidad,
  });

  return !pedidoUpdate
    ? res.status(400).send({ message: "Error editing pedido" })
    : res.status(200).send({ message: "pedido updated" });
};
const deletePedido = async (req, res) => {
  const pedidoDelete = await pedido.findByIdAndDelete({
    _id: req.params["_id"],
  });
  return !pedidoDelete
    ? res.status(400).send({ message: "pedido no found" })
    : res.status(200).send({ message: "pedido deleted" });
};

const findPedido = async (req, res) => {
  const pedidoId = await pedido.findById({ _id: req.params["_id"] });
  return !pedidoId
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ pedidoId });
};

export default {
  findPedido,
  deletePedido,
  updatePedido,
  listPedido,
  registerPedido,
};
