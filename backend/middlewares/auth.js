import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  let token = req.header("Authorization");
  if (!token)
    return res
      .status(400)
      .send({ message: "Autorizacion denegada: Token vacio" });

  token = token.split(" ")[1];
  if (!token)
    return res
      .status(400)
      .send({ message: "Autorizacion denegada: Token vacio" });

  try {
    req.user = jwt.verify(token, process.env.SK_JWT);
    next();
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Authorizacion denegada: Token invalido" });
  }
};

export default auth;
