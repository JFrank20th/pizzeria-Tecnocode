import pizzaSize from "..//models/pizzaSize.js";

const savePizzaSize = async (req, res) => {
  if (!req.body.tamaño || !req.body.precio)
    return res.status(400).send({ message: "datos incompletos" });

  const pizzaSizeSchema = new pizzaSize({
    tamaño: req.body.tamaño,
    precio: req.body.Number,
  });

  const result = await pizzaSizeSchema.save();
  return !result
    ? res.status(400).send({ message: "Error al registrar datos de la pizza" })
    : res
        .status(200)
        .send({ message: "Tamaño y precio de la pizza registrada" });
};

const updatePizzaSize = async (req, res) => {
  if (!req.body.tamaño || !req.body.precio)
    return res.status(400).send({ message: "Error de sintaxis" });

  const pizzaSizeUpdate = await pizzaSize.findByIdAndUpdate(req.body._id, {
    tamaño: req.body.tamaño,
    precio: req.body.Number,
  });

  return !pizzaSizeUpdate
    ? res.status(400).send({ message: "No se pudo actualizar" })
    : res.status(200).send({ message: "Caracteristicas actualizadas" });
};

const deletePizzaSize = async (req, res) => {
  const pizzaSizeDelete = await pizzaSize.findByIdAndDelete(req.params._id);
  return !pizzaSizeDelete
    ? res.status(400).send({ message: "Caracteristicas no encontradas" })
    : res.status(200).send({ message: "Caracteristicas eliminadas" });
};

const listPizzaSize = async (req, res) => {
    const pizzaSizeList = await pizzaSize.find({pizzaSizeId: req.pizzaSize._id});
    return pizzaSizeList.length == 0
    ? res.status(400).send({message : "Lista vacia"})
    : res.status(200).send({pizzaSizeList})

}

export default { savePizzaSize, updatePizzaSize, deletePizzaSize, listPizzaSize};
