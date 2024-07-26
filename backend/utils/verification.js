import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();
const sentVerificationEmail=async({email,userData})=>{
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.PASSWORD
            }
        });
        
        const token =await jwt.sign({
                data: userData
            }, process.env.JWT_SECRET, { expiresIn: '10m' }  
        );
        const mailConfigurations = {
        
            // It should be a string of sender/server email
            from: 'taimoor.giki.cs@gmail.com',
        
            to: email,
        
            // Subject of Email
            subject: 'Email Verification',
            
            // This would be the text of email body
            text: `Hi! There, You have recently visited 
                   our website and entered your email.
                   Please follow the given link to verify your email
                   http://localhost:3000/reset-password-form/${token} 
                   Thanks`
        };
        
        const info = await transporter.sendMail(mailConfigurations);
        console.log('Email sent successfully:', info.response);
    }
    catch(err){
        console.log(err.message);
    }
}

export default sentVerificationEmail;