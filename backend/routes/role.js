import express from "express";
import role from "../controllers/role.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";

const router = express.Router();

router.post("/registerRole", auth, admin,role.registerRole);
router.get("/listRole", auth, admin, role.listRole);
router.put("/updateRole", auth, admin, role.updateRole);
router.delete("/deleteRole/:_id", auth, admin, role.deleteRole);

export default router;
