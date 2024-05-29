import nodemailer from 'nodemailer';

// Gmail hesap bilgileri
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

// E-posta gönderme 
const sendEmail = async (req, res) => {

    try {
        const {
            recipient,
            subject,
            message
        } = req.body;

        await transporter.sendMail({
            from: '"STAYEASE hotel" <nurullah.dinc.156@gmail.com>',
            to: recipient,
            subject: subject,
            text: message  
        });

        res.status(200).json({
            message: 'E-posta başarılı bir şekilde gönderildi'
        });
    } catch (error) {

        console.log(error);
        res.status(500).json({
            error: 'E-posta gönderilirken bir hata oluştu'
        });
    }
};

export {
    sendEmail
};