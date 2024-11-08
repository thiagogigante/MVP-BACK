import User from "../models/User.js";

async function getUsers(req, res) {
    try {
        const users = await User.find({});

        res.send(JSON.stringify(users));
    } catch (err) {
        res.send(err);
    }
}

async function registerUser(req, res) {
    try {
        const { body } = req;

        const user = new User(body);
        console.log(user);
        await user.save();

        res.send(JSON.stringify(body));
    } catch (err) {
        res.send(err);
    }
}

export default { getUsers, registerUser };
