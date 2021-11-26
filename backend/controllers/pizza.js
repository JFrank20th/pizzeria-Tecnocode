import pizza from "../models/pizza.js";

const registerPizza = async (req, res) => {
    if (!req.body.name || !req.body.description || !req.body.precio)
      return res.status(400).send({ message: "Incomplete data" });

    const existingPizza = await pizza.findOne({ name: req.body.name });
    if (existingPizza)
      return res.status(400).send({ message: "The pizza already exist" });

    const pizzaSchema = new pizza({
      name: req.body.name,
      description: req.body.description,
      precio: req.body.precio,
      dbStatus: true,
    });

    const result = await pizzaSchema.save();
    return !result
      ? res.status(400).send({ message: "Failed to register pizza" })
      : res.status(200).send({ result });
  };

  const listPizza = async (req, res) => {
    const pizzaList = await pizza.find();
    return pizzaList.length == 0
      ? res.status(400).send({ message: "Empty pizza list" })
      : res.status(200).send({ pizzaList });
  };

  const updatePizza = async (req, res) => {
    if (!req.body.name || !req.body.description || !req.body.precio)
      return res.status(400).send({ message: "Incomplete data" });

    const existingPizza = await pizza.findOne({
      name: req.body.name,
      description: req.body.description,
      precio: req.body.precio,
    });
    if (existingPizza)
      return res.status(400).send({ message: "The pizza already exist" });

    const pizzaUpdate = await pizza.findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      description: req.body.description,
      precio: req.body.precio,
    });

    return !pizzaUpdate
      ? res.status(400).send({ message: "Error editing pizza" })
      : res.status(200).send({ message: "pizza updated" });
  };
const deletePizza = async (req, res) => {
    const pizzaDelete = await pizza.findByIdAndDelete({ _id: req.params["_id"] });
    return !pizzaDelete
      ? res.status(400).send({ message: "pizza no found" })
      : res.status(200).send({ message: "pizza deleted" });
  };

  const findPizza = async (req, res) => {
    const pizzaId = await pizza.findById({ _id: req.params["_id"] });
    return !pizzaId
      ? res.status(400).send({ message: "No search results" })
      : res.status(200).send({ pizzaId });
  };

  export default {findPizza, deletePizza, updatePizza, listPizza, registerPizza}