const setupMessage = require("../templates/mailTemplates");
const headers = require("../templates/headerTemplates");
const mailResponse = require("../services/sendMailService")
const messageValidation = require("../validations/messageValidation");

module.exports = {
    async sendMail(req, res) {
        try {
            const { to, template, name } = await messageValidation.messageValidator(req.body);
            const message = await setupMessage.setupMessage({ to, template, name }); 
            const mailStatus = await mailResponse.mailResponse(message);
            res.setHeader(headers.mailContent.contentType, headers.mailContent.mimeType);
            res.status(mailStatus.statusCode).json(mailStatus);
        } catch (error) {
            res.setHeader(headers.mailContent.contentType, headers.mailContent.mimeType);
            res.status(headers.mailError.statusCode).json(headers.mailError);
        }
    }
}