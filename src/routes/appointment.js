import { Router } from "express";
import authController from "../controllers/authController.js";
import appointmentController from "../controllers/appointmentController.js";
import nodemalier from "../services/nodemalier.js";

const router = Router();

router.get(
    "/",
    authController.verifyToken,
    appointmentController.getAppointment
);

router.post(
    "/new",
    appointmentController.newAppointment,
    nodemalier.sendConfirmationEmail
);

export default router;
