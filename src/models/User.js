import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hashed password
    role: {
        type: String,
        enum: ["student", "teacher", "admin", "citizen"],
        required: true,
    },
    phoneNumber: { type: String },
    profileDetails: {
        profession: { type: String }, // e.g., only for students and teachers
        course: { type: String }, // specific to students, if needed
        specialization: { type: String }, // specific to teachers
    },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

export default User;
