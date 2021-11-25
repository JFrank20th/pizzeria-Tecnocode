import role from "../models/role.js";

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "informacion incompleta" });

  const existingRole = await role.findOne({ name: req.body.name });
  if (existingRole) return res.status(400).send({ message: "este rol existe" });

  const roleSchema = new role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await roleSchema.save();
  return !result
    ? res.status(400).send({ message: "error al registrar" })
    : res.status(200).send({ message: "registro exitoso" });
};

const listRole = async (req, res) => {
  const roleList = await role.find();
  return !roleList.length == 0
    ? res.status(400).send({ message: "lista vacia" })
    : res.status(200).send({ roleList });
};

const updateRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "informacion incompleta" });

  const existingRole = await role.findOne({
    name: req.body.name,
    description: req.body.description,
  });
  if (existingRole) return res.status(400).send({ message: "este rol existe" });

  const roleUpdate = await role.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
  });

  return !roleUpdate
    ? res.status(400).send({ message: "error al actualizar" })
    : res.status(200).send({ message: "role actualizado" });
};

const deleteRole = async (req, res) => {
  const roleDetele = await role.findByIdAndDelete({ _id: req.params["_id"] });

  return !roleDetele
    ? res.status(400).send({ message: "error al eliminar rol" })
    : res.status(200).send({ message: "role eliminado" });
};

export default { registerRole, listRole, updateRole, deleteRole};
