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
    authController.verifyToken,
    authController.verifyPermission("admin"),
    scheduleConfigControllers.addScheduleConfig
);

router.put(
    "/update",
    authController.verifyToken,
    authController.verifyPermission("admin"),
    scheduleConfigControllers.updateScheduleConfig
);

export default router;
