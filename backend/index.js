import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import pizza from "./routes/pizza.js";
import pedido from "./routes/pedido.js";
import role from "./routes/role.js";
import user from "./routes/user.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/pizza", pizza);
app.use("/api/pedido", pedido);
app.use("/api/user", user);
app.use("/api/role", role);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);
db.dbConnection();
