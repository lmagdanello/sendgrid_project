module.exports = {
    mailContent: {
        contentType: 'Content-Type',
        mimeType: 'application/json'

    },
    mailSuccessfull: {
        statusCode: 202,
        success: true,
        message: "E-mail enviado com sucesso!"
    },
    mailError: {
        statusCode: 400,
        success: false,
        message: "Error sending the email!"
    },
};
