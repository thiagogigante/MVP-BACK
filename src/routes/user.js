import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        if (user.password !== password) {
            throw new Error("Usuário ou senha inválidos.");
        }

        res.send(JSON.stringify(user));
    } catch (err) {
        res.send(err);
    }
});

router.post("/register", async (req, res) => {
    try {
        const { body } = req;

        const user = new User(body);
        console.log(user);
        await user.save();

        res.send(JSON.stringify(body));
    } catch (err) {
        res.send(err);
    }
});

export default router;
