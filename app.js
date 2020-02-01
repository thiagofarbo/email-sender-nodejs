const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.render('index.ejs'))
app.post('/send',(req, res) =>{

const to = req.body.to;
const subject = req.body.subject;
const body = req.body.body;

const user = 'youremail';
const pass = 'yourpassword';

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", 
    port: "587",
    auth: {user, pass}
});

transporter.sendMail({
    from: user,
    to: to,
    replyTo: "youremailtoreplay",
    subject: subject,
    text: body,
    html: '<h1>Enjoy :)</h1>'
}).then(info =>{
    console.log(info)
    res.send(info);
}).catch(error =>{
    console.log(error)
    res.send(error);
});

})

app.listen(port, () => console.log(`Application is running on port ${port}!`));