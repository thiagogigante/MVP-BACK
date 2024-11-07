import { query, Router } from "express";
import Appointment from "../models/Appointment.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find({});

        res.send(JSON.stringify(appointments));
    } catch (err) {
        res.send(err);
    }
});

router.post("/new", async (req, res) => {
    try {
        const { body } = req;

        const appointment = new Appointment(body);
        await appointment.save();

        res.send(JSON.stringify(body));
    } catch (err) {
        res.send(err);
    }
});

export default router;
