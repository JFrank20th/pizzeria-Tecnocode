import express from "express";
import user from "../controllers/user.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
const router = express.Router();

router.post("/registerUser", user.registerUser);
router.post("/registerAdmin", auth, admin, user.registerAdmin);
router.post("/login", user.login);
router.get("/listUser", auth, admin, user.listUser);
router.get("/findUser/:_id", auth, admin, user.findUser);
router.put("/updateUser", auth, admin, user.updateUser);
router.delete("/deleteUser/:_id", auth, admin, user.deleteUser);

export default router;
