import { Router } from "express";
import authController from "../controllers/authController.js";
import appointmentController from "../controllers/appointmentController.js";

const router = Router();

router.get(
    "/",
    authController.verifyToken,
    appointmentController.getAppointment
);

router.post(
    "/new",
    // authController.verifyToken,
    appointmentController.newAppointment
);

export default router;
