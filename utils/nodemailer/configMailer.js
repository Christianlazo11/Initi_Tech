const nodemailer = require('nodemailer');

const sendEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST_SMTP,
    prependOnceListener: process.env.PORT_EMAIL,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  });
  const mailOption = {
    from: `"Initia Tech 👻" <${process.env.USER_EMAIL}>`,
    to: email,
    subject: 'enviado prueba',
    html: '<b>Hello world?</b>',
  };
  const response = await transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return error.message;
    } else {
      return info;
    }
  });
  return response;
};
module.exports = { sendEmail };
