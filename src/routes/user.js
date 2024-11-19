import { Router } from "express";
import authController from "../controllers/authController.js";
import userController from "../controllers/userController.js";

const router = Router();

router.get(
    "/",
    authController.verifyPermission("admin"),
    authController.verifyToken,
    userController.getUsers
);

router.post("/login", authController.login);
router.post(
    "/register",
    authController.verifyPermission("admin"),
    authController.verifyToken,
    userController.registerUser
);

export default router;
