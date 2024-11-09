import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt"

async function login(req, res) {
    const SECRET = process.env.JWT_SECRET;
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Usuário não encontrado!");
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'E-mail ou senha inválidos!' });
        }

        const userDataToEncode = {
            name: user.name,
            email: user.email,
            role: user.role,
        };

        const code = jwt.sign(userDataToEncode, SECRET);

       
        res.status(200).send(JSON.stringify(code));
    } catch (err) {
        res.status(401).send(err.message);
    }
}

async function verifyToken(req, res, next) {
    const SECRET = process.env.JWT_SECRET;

    const token = req.headers["authorization"];
    if (!token) return res.status(401).send("Token não encontrado!");

    try {
        jwt.verify(token, SECRET);
        next();
    } catch (err) {
        res.status(401).send("Token inválido!");
    }
}

export default { login, verifyToken };
