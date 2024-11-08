import Appointment from "../models/Appointment.js";

async function getAppointment(req, res) {
    try {
        const appointments = await Appointment.find({});

        res.send(JSON.stringify(appointments));
    } catch (err) {
        res.send(err);
    }
}

async function newAppointment(req, res) {
    try {
        const { body } = req;

        const appointment = new Appointment(body);
        await appointment.save();

        res.send(JSON.stringify(body));
    } catch (err) {
        res.send(err);
    }
}

export default { getAppointment, newAppointment };
