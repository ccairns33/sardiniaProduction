
const { body,validationResult } = require('express-validator');
const nodemailer = require("nodemailer");


// /contact 
// GET contact
exports.displayContact = async(req,res)=>{ 
    res.render("../views/contact", {layout: "layout2",title:"Contact | Sardinian Disruption", description:"We appreciate your interest in Sardinian Disruption's content. For all inquiries, please use the contact form found on this page."})

}
// /contact 
// POST contact
// Process request after validation and sanitization.
exports.handleContactForm = [
    body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('email', 'Invalid email.').trim().isLength({ min: 1 }).isEmail().escape(),
    body('message', 'Message must not be empty.').trim().isLength({ min: 1 }).escape(),
(req,res)=>{ 
    // Validate and sanitise fields.
    console.log(req.body.name);
    const errors = validationResult(req);
    console.log(errors);
        let arrErrors = errors.array({ onlyFirstError: true })
        const nameError = arrErrors.find( ({ param }) => param === 'name' );
        const emailError = arrErrors.find( ({ param }) => param === 'email' );
        const messageError = arrErrors.find( ({ param }) => param === 'message' );
        
        console.log("Errors:")
        console.log(arrErrors);
        console.log("\nreq.body:")
        console.log(req.body);

        let nameInput = req.body.name;
        let emailInput = req.body.email;
        let messageInput = req.body.message;
        
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render("../views/contact", {title: "Contact | Sardinian Disruption", description:"An error occured.", layout:'layout2', nameError, emailError, messageError, nameInput, emailInput, messageInput})     
        }
        else{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USR,
                pass: process.env.EMAIL_PWD
            }
    
        });
        const mailOptions = {
            from: req.body.email,
            to: process.env.EMAIL_USR,
            subject: `Message from ${req.body.email}`,
            text:
                `To: ${process.env.EMAIL_USR} \nFrom: ${req.body.name} ${req.body.email} \n\nMessage:\n${req.body.message}`
        };
        transporter.sendMail(mailOptions, (error,info)=> {
            if (error){
                console.log(error);
                res.render('error', {title: `500 | Sardinian Disruption`, status: "500", message: "Unable to send message. Please try again."});

            }else {
                console.log("Email sent: " + info.response);
                res.render("../views/success", {layout: "layout2", title: "Success | Sardinian Disruption", description:"Your message to Sardinian Disruption has been successfully sent."});
                return;
                
            }
        });
    }

    }
];