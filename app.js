const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.render('index'))

app.get('/send',(req, res) =>{

const user = 'youremail';
const pass = 'yourpassword';

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", 
    port: "587",
    auth: {user, pass}
});

transporter.sendMail({
    from: user,
    to: user,
    replyTo: "youremailtoreplay",
    subject: 'Test',
    text: 'Testing',
}).then(info =>{
    console.log(info)
    res.send(info);
}).catch(error =>{
    console.log(error)
    res.send(error);
});

})

app.listen(port, () => console.log(`Application is running on port ${port}!`));