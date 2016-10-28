var nodemailer = require('nodemailer');
var debug = require('debug')('runjs2:mail');

var mail = function(){



    var smtpConfig = {
        host: 'smtp.163.com',
        port: 465,
        secure: true, // use SSL 
        auth: {
            user: 'ajmsbuild@163.com',
            pass: 'sqlexp6848'
        }
    };

    // create reusable transporter object using the default SMTP transport 
    var transporter = nodemailer.createTransport(smtpConfig);
     
    // setup e-mail data with unicode symbols 
    var mailOptions = {
        from: '"Fred Foo 👥" <ajmsbuild@163.com>', // sender address 
        to: 'youpengqin@163.com', // list of receivers 
        subject: 'Hello ✔', // Subject line 
        text: 'Hello world 🐴', // plaintext body 
        html: '<b>Hello world 🐴</b>' // html body 
    };
     

    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function(error, info){

        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};

module.exports = {sendMail : mail};


