import { Router } from "express";
import authController from "../controllers/authController.js";
import userController from "../controllers/userController.js";
import nodemailerService from "../services/nodemalier.js";

const router = Router();

router.get(
    "/",
    authController.verifyToken,
    authController.verifyPermission("admin"),
    userController.getUsers
);
router.get(
    "/email",
    nodemailerService.sendConfirmationEmail
);

router.post("/login", authController.login);
router.post(
    "/register",
    authController.verifyToken,
    authController.verifyPermission("admin"),
    userController.registerUser
);

export default router;
