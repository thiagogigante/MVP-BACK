import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

async function getUsers(req, res) {
    try {
        const users = await User.find({});

        res.send(JSON.stringify(users));
    } catch (err) {
        res.send(err);
    }
}

async function registerUser(req, res) {
    const SECRET = process.env.JWT_SECRET;
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "E-mail e Senha são necessários!" });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({ ...req.body, password: hashedPassword });
        // console.log(user);
        await user.save();

        const userDataToEncode = {
            name: user.name,
            email: user.email,
            role: user.role,
        };

        const code = jwt.sign(userDataToEncode, SECRET);

        res.status(200).send(JSON.stringify(code));
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export default { getUsers, registerUser };
