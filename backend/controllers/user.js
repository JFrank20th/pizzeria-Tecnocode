import user from "../models/user.js";
import role from "../models/role.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send({ message: "Datos incompletos" });

  const existingUser = await user.findOne({ email: req.body.email });
  if (existingUser)
    return res.status(400).send({ message: "El usuario ya existe" });

  const passHash = await bcrypt.hash(req.body.password, 10);

  const roleId = await role.findOne({ name: "user" });
  if (!roleId) return res.status(400).send({ message: "El rol no existe" });

  const userSchema = new user({
    name: req.body.name,
    email: req.body.email,
    password: passHash,
    roleId: roleId._id,
    dbStatus: true,
  });

  const result = await userSchema.save();
  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          roleId: result.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(400).send({ message: "Error al registrar" });
  }
};

const registerAdmin = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.roleId
  )
    return res.status(400).send({ message: "Datos incompletos" });

  const existingUser = await user.findOne({ email: req.body.email });
  if (existingUser)
    return res.status(400).send({ message: "El usuario ya existe" });

  const passHash = await bcrypt.hash(req.body.password, 10);

  const userSchema = new user({
    name: req.body.name,
    email: req.body.email,
    password: passHash,
    roleId: req.body.roleId,
    dbStatus: true,
  });

  const result = await userSchema.save();

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          roleId: result.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(400).send({ message: "Error al registrar" });
  }
};

const listUser = async (req, res) => {
  const userList = await user.find();
  return userList.length === 0
    ? res.status(400).send({ message: "Lista de usuarios vacia" })
    : res.status(200).send({ userList });
};

const findUser = async (req, res) => {
  const userFind = await user.findById({ _id: req.params["_id"] });
  return !userFind
    ? res.status(400).send({ message: "Usuario no existe" })
    : res.status(200).send({ userFind });
};

const updateUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.roleId)
    return res.status(400).send({ message: "Datos incompletos" });

  const emailChange = await user.findById({ _id: req.body._id });
  //console.log(emailChange);
  if (req.body.email !== emailChange.email)
    return res.status(400).send({ message: "El email nunca puede cambiarse" });

  let pass = "";

  if (req.body.password) {
    pass = await bcrypt.hash(req.body.password, 10);
  } else {
    const userFind = await user.findOne({ email: req.body.email });
    pass = userFind.password;
  }

  const existingUser = await user.findOne({
    name: req.body.name,
    email: req.body.email,
    password: pass,
    roleId: req.body.roleId,
  });

  if (existingUser)
    return res
      .status(400)
      .send({ message: "Usted no ha cambiado ningun dato" });

  const userUpdate = await user.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    email: req.body.email,
    password: pass,
    roleId: req.body.roleId,
  });

  return !userUpdate
    ? res.status(400).send({ message: "Error al actualizar usuario" })
    : res.status(200).send({ message: "Usuario actualizado" });
};

const deleteUser = async (req, res) => {
  const userDelete = await user.findByIdAndDelete({ _id: req.params["_id"] });
  return !userDelete
    ? res.status(400).send({ message: "Usuario no existe" })
    : res.status(200).send({ message: "Usuario eliminado" });
};

const login = async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send({ message: "Datos incompletos" });

  const userLogin = await user.findOne({ email: req.body.email });
  if (!userLogin)
    return res.status(400).send({ message: "Email o constraseña incorrectas" });

  const hash = await bcrypt.compare(req.body.password, userLogin.password);
  if (!hash)
    return res.status(400).send({ message: "Email o contraseña incorrectas" });

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: userLogin._id,
          name: userLogin.name,
          roleId: userLogin.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(400).send({ message: "Error al Ingresar" });
  }
};

export default {
  registerUser,
  registerAdmin,
  listUser,
  findUser,
  updateUser,
  deleteUser,
  login,
};
