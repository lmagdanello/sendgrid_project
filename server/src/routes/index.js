const express = require("express");
const router = express.Router();
const sendEmailController = require("../controllers/sendMailController");
const {} = require("../templates/mailTemplates")

router.get('/api', (req, res) => {
    res.send('api reach out');
})

router.post('/sendMail', sendEmailController.sendMail);


module.exports = router;