var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'yotuo2003@gmail.com', // enter your email address
        pass: 'incorrect12345'  // enter your visible/encripted password
    }
});

const mailOptions = (from, to, subject, text) => {
    return { from: from, to: to, subject: subject, text: text}
}
// var mailOptions = {
//     from: 'yotuo2003@gmail.com',
//     to: receiver,
//     subject: subject,
//     text: message
// };



module.exports = {
    transporter,
    mailOptions
}
