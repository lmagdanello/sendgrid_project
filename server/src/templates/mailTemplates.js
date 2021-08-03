require('dotenv').config();

const setupTemplates = (name) => ({

    "contratacao": {
        subject: 'Parabéns!',
        html: `<h1>Parabéns!</h1><p></p><strong>${name}, você foi contratado!</strong>`
    },

    "welcome": {
        subject: 'Seja bem-vindo!',
        html: `<h1>Seja bem-vindo!</h1><strong>${name}, sinta-se em casa!</strong>`
    },

    "aniversario": {
        subject: 'Feliz aniversário!',
        html: `<h1>Parabéns!</h1><strong>${name}, muitos anos de vida!</strong>`
    },

    "teste": {
        subject: 'teste!',
        html: `<h1>teste!</h1><strong>${name}, teste!</strong>`
    }

})

module.exports = {

    setupTemplates,
    
    async setupMessage({ to, name, template }) {
        const from = process.env.FROM_MAIL;

        message = setupTemplates(name)[template];
        message.to = to;
        message.from = from;
        return message;
    }
}
