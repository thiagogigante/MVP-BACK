import Appointment from "../models/Appointment.js";

async function getAppointment(req, res) {
    try {
        const appointments = await Appointment.find({});

        res.send(JSON.stringify(appointments));
    } catch (err) {
        res.send(err);
    }
}

async function newAppointment(req, res, next) {
    try {
        const { body } = req;

        const finded = await Appointment.find({
            time: body.time,
            date: body.date,
        });

        if (finded.length > 0)
            return res.status(409).send("Data e horário não disponível!");

        const appointment = new Appointment(body);
        await appointment.save();

        next();
    } catch (err) {
        res.send(err);
    }
}

export default { getAppointment, newAppointment };
