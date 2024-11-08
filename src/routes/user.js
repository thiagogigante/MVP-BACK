import { Router } from "express";
import authController from "../controllers/authController.js";
import userController from "../controllers/userController.js";

const router = Router();

router.get("/", authController.verifyToken, userController.getUsers);

router.post("/login", authController.login);
router.post("/register", userController.registerUser);

export default router;
