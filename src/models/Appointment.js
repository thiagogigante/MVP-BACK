import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // student/teacher assigned to the appointment
    serviceType: { type: String, required: true }, // e.g., Tax Declaration, Financial Advice
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true }, // e.g., "10:00 AM - 11:00 AM"
    status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending",
    },
    feedback: { type: String }, // Feedback after appointment is completed
    rating: { type: Number, min: 1, max: 5 }, // Optional rating by citizen
    createdAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
