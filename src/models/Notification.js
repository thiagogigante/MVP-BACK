import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
        type: String,
        enum: [
            "appointmentConfirmation",
            "appointmentReminder",
            "feedbackRequest",
        ],
        required: true,
    },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    sentAt: { type: Date, default: Date.now },
    isRead: { type: Boolean, default: false },
});

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;
