import mongoose from "mongoose";

const AvailabilitySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // student or teacher
    date: { type: Date, required: true },
    timeSlots: [
        {
            slot: { type: String }, // e.g., "10:00 AM - 11:00 AM"
            isAvailable: { type: Boolean, default: true },
        },
    ],
});

const Availability = mongoose.model("Availability", AvailabilitySchema);

export default Availability;
