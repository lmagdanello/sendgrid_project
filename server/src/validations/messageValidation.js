const headers = require("../templates/headerTemplates");
const Joi = require('@hapi/joi');
const templates = require("../templates/mailTemplates");
const _ = require('lodash');

module.exports = {

    async messageValidator(message) {
        const messageSchema = Joi.object().keys({
            to: Joi.string().email().required(),
            template: Joi.any().valid(Object.keys(templates.setupTemplates())).required(),
            name: Joi.string().required(),
        }).required();

        const result = Joi.validate(message, messageSchema, { abortEarly: false });

        return new Promise((resolve, reject) => {
            if (!result.error) {
                resolve(message);
            } else {
                reject(message);
            }
        })
    },

    async messageStatusValidation(messageStatus) {
        try {
            if (_.isEqual(messageStatus, headers.mailSuccessfull.statusCode)) {
                header = headers.mailSuccessfull;
            } else {
                header = headers.mailError;
            }
            return header;
        } catch (error) {
            throw error;
        }
    }
}