import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: {
        type: String,
        enum: ["aguardando", "confirmado", "concluido", "cancelado"],
        default: "aguardando",
    },
    feedback: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
