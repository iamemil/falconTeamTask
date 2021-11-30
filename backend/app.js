const express=require('express');
const engine = require('ejs-mate');
const multer= require('multer');
const Jimp = require('jimp');
const upload=multer({dest: 'uploads/'})
const path = require('path');
const app=express();
//const nodemailer = require('nodemailer');


//app.use(cors())

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/uploads')))

app.get('/', (req, res)=>{
    
    res.render('index');
})

app.post('/img', upload.single('photo'), async(req, res)=>{
    const im2=req.file.filename;
    console.log(im2);
    const image = await Jimp.read(`uploads/${im2}`);
    image.grayscale().write(`uploads/${im2}_grey`);
    res.render('img', {im2});
    res.send(200);
    //res.download(`uploads/${im2}_grey`);

    ///change
    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'gigididberidze01@gmail.com',
    //       pass: 'vitomhakeri1'
    //     }
    //   });
      
    //   var mailOptions = {
    //     from: 'gigididberidze01@gmail.com',
    //     to: 'giorgi.didberidze@yahoo.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    //   };
      
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });

    // ///until

    // ///change
    // const {email} = req.body
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: 'nyah.stokes83@ethereal.email', // generated ethereal user
    //       pass: 'a1TVx1GC3eXMYTPTFY', // generated ethereal password
    //     },
    //   });
    
    //   const msg = {
    //     from: '"The Express App" <theExpressApp@example.com>', // sender address
    //     to: `$(email)`, // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //   }
    //   // send mail with defined transport object
    //   const info = await transporter.sendMail(msg);
    
    //   console.log("Message sent: %s", info.messageId);
    //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
    //   // Preview only available when sending through an Ethereal account
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    // ///until
})

app.listen(2000, ()=>{
    console.log('listening on port 2000');
})