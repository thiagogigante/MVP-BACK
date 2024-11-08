import ScheduleConfig from "../models/ScheduleConfig.js";

async function getScheduleConfig(req, res) {
    try {
        const scheduleConfig = await ScheduleConfig.find({});

        res.send(JSON.stringify(scheduleConfig));
    } catch (err) {
        res.send(err);
    }
}

async function addScheduleConfig(req, res) {
    try {
        const { body } = req;

        const scheduleConfig = new ScheduleConfig(body);
        await scheduleConfig.save();

        res.send(JSON.stringify(body));
    } catch (err) {
        res.send(err);
    }
}

async function updateScheduleConfig(req, res) {
    try {
        const { body } = req;

        const query = { dayOfWeek: body.dayOfWeek };
        const dataToUpdate = {
            timeSlots: {
                start: body.hour_start,
                end: body.hour_finish,
            },
        };
        await ScheduleConfig.findOneAndUpdate(query, dataToUpdate);

        res.send(JSON.stringify({ ...query, ...dataToUpdate }));
    } catch (err) {
        res.send(err);
    }
}

export default { getScheduleConfig, addScheduleConfig, updateScheduleConfig };
