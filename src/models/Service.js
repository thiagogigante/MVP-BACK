import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true }, // Duration in minutes
    isActive: { type: Boolean, default: true },
});

const Service = mongoose.model("Service", ServiceSchema);

export default Service;
