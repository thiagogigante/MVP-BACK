import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hashed password
    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("Users", UserSchema);

export default User;
