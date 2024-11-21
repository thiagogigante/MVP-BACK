// import "dotenv/config";
import nodemailer from "nodemailer";
// import confirmationHTML from "../emailTemplate/appointment-confirmation/index.html"
import * as cheerio from "cheerio";
import email from "../emailTemplates/email.js";

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

function sendConfirmationEmail(req, res) {
    const { body } = req;
    const to = body.email;
    const subject = "Agendamento NAF";
    const $ = cheerio.load(email.emailHTML);

    $("span.name").text(body.name);
    $("span.date").text(body.date);
    $("span.time").text(body.time);

    transporter.sendMail({
        from: process.env.MAIN_FROM,
        to,
        subject,
        html: $.html(),
    });

    res.send(
        `Seu agendamento para o dia ${body.date} às ${body.time} foi efetuado com sucesso!`
    );
}

export default { sendConfirmationEmail };
