// File: server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// const cors = require('cors'); // Uncomment this line
const app = express();
const cors = require('cors');


// Import the Submission model or replace it with your actual model
// const Submission = require('./path-to-submission-model');

const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const {from,to, name, email, subject, message } = req.body;

    
    try {
        console.log('Form data saved to MongoDB');
    } catch (error) {
        console.error('Error saving to MongoDB:', error);
    }

    var transporter = nodemailer.createTransport({ //https://mailtrap.io/inboxes
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "0a8114f3c9b27d",
            pass: "3f776140999e05"
        }
    });



    const mailOptions = {
        from:from,// 'aryankushwaha2121@gmail.com',
        to:to, //'aryanwebdevcontact@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error', details: error.message });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
