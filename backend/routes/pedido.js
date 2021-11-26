import express from "express";
import pedido from "../controllers/pedido.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";

const router = express.Router();

router.post("/registerPedido", pedido.registerPedido);
router.get("/listPedido", pedido.listPedido);
router.get("/findPedido", pedido.findPedido);
router.put("/updatePedido", pedido.updatePedido);
router.delete("/deletePedido", pedido.deletePedido);

export default router;
