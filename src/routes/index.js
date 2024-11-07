import { Router } from "express";
import userRoutes from "./user.js";
import appointmentRoutes from "./appointment.js";
import scheduleConfigRoutes from "./scheduleConfig.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/scheduleConfig", scheduleConfigRoutes);

export default router;
