import mongoose from "mongoose";

const ScheduleConfigSchema = new mongoose.Schema({
    dayOfWeek: {
        type: String,
        enum: [
            "domingo",
            "segunda",
            "terca",
            "quarta",
            "quinta",
            "sexta",
            "sabado",
        ],
        required: true,
        unique: true,
    },
    isOpen: { type: Boolean, default: true }, // define se está aberto neste dia
    timeSlots: {
        start: { type: String }, // exemplo: "09:00"
        end: { type: String }, // exemplo: "12:00"
    },
});

const ScheduleConfig = mongoose.model("scheduleconfigs", ScheduleConfigSchema);

export default ScheduleConfig;
