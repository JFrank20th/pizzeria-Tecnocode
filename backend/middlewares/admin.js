import role from "../models/role.js";

const admin = async (req, res, next) => {
  const adminRole = await role.findById(req.user.roleId);
  if (!adminRole) return res.status(400).send({ message: "Rol no encontrado" });

  return adminRole.name === "admin"
    ? next()
    : res.status(400).send({ message: "Usuario no autorizado" });
};

export default admin;
