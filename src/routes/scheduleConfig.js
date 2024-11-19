import { Router } from "express";
import scheduleConfigControllers from "../controllers/scheduleConfigControllers.js";
import authController from "../controllers/authController.js";

const router = Router();

router.get(
    "/",
    authController.verifyToken,
    scheduleConfigControllers.getScheduleConfig
);

router.post(
    "/new",
    authController.verifyPermission("admin"),
    authController.verifyToken,
    scheduleConfigControllers.addScheduleConfig
);

router.put(
    "/update",
    authController.verifyPermission("admin"),
    authController.verifyToken,
    scheduleConfigControllers.updateScheduleConfig
);

export default router;
