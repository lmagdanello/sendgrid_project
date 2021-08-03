const sgMail = require('@sendgrid/mail');
const messageValidation = require("../validations/messageValidation");
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
    async mailResponse(message) {
        try {
            const sendEmailResponse = await sgMail.send(message);
            const mailStatus = await messageValidation.messageStatusValidation(sendEmailResponse[0].statusCode);
            return mailStatus;
        } catch (error) {
            const mailError = await messageValidation(sendEmailResponse[0].statusCode);
        }
    }
}