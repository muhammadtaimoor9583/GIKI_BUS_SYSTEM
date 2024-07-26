import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer';

import User from "../models/user.model.js";
import Token from "../models/token.model.js";
import setCookie from '../utils/handleCookie.js';
import sentVerificationEmail from '../utils/verification.js';
import Ticket from '../models/ticket.model.js';

import { v2 as cloudinary } from 'cloudinary'

const verifyEmail=async (req,res)=>{
    const {email}=req.body;
    const userData=req.body;
    try {
        sentVerificationEmail({email,userData});
        res.json({message:'Verification mail sent successfully'});
    } catch (error) {
        res.status(404).json({error:'Internal server error'});
        console.log('Error in verifyEmail: ',error.message); 
    }
}


const SignUp = async (req, res) => {
    const {token}=req.params;
    const decoded= jwt.verify(token,process.env.JWT_SECRET);
    const userData=decoded.data;
    const { firstName, lastName, email, password, position, username } = userData;
    let { profilePic } = userData;
    try {
        if (!firstName || !lastName || !email || !password || !position || !username) {
            return res.status(404).json({ error: "Please fill all the fields" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (profilePic) {
            const res_url = await cloudinary.uploader.upload(profilePic);
            profilePic = res_url.secure_url;
        }
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            position,
            profilePic,
            username
        });
        await user.save();
        setCookie(user._id, res);
        console.log(user)
        res.redirect(process.env.LANDING_PAGE_URL);

    } catch (error) {
        console.log('Error in sign up controller', error.message);
        res.status(500).json({ message: 'Server Error' });
    }

}

const Login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        console.log(user)
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ error: 'Invalid Credentials' });
        }
        setCookie(user._id, res);
        res.status(200).json({ user });
    } catch (error) {
        console.log('Error in login controller');
        res.status(500).json({ error: 'Server Error' });
    }

}

const Logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.log('Error in logout controller');
        res.status(500).json({ error: 'Server Error' });
    }

}


const ResetPassword=async(req,res)=>{
    const {email}=req.body;
    try {
        const userData= await User.findOne({email});
        
        
        if(!userData){
            return res.status(404).json({error:'This email is not registered'});
        }
        sentVerificationEmail({email,userData});
        res.status(200).json({error:'Email has been sent'});
    } catch (error) {
        console.log(error.message);
        res.status(404).json({error:'Internal server error'});

    }
}

const VerifyPasswordToken=async(req,res)=>{
    const {token}=req.params;
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(decoded){

            setCookie(decoded.data._id,res);
            res.status(200).json(decoded.data);
        }
        else{
            res.status(404).json({error:'Something went wrong'});
        }

    } catch (error) {
        console.log(error.message);
        res.status(404).json({error:'Internal server error'});
    }
}



const updateProfile = async (req, res) => {
    const { firstName, lastName, email, password, username, current_password } = req.body;
    let { profilePic } = req.body;
    try {
        const user = req.user;
        let hashedPassword = null;

        if (password) {
            // check the current_password
            const isMatch = await bcrypt.compare(current_password, user.password);
            if (!isMatch) {
                return res.status(404).json({ error: 'Invalid Current Password' });
            }
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        if (profilePic) {
            if (user.profilePic) {
                await cloudinary.uploader.destroy(user.profilePic.split('/').pop().split('.')[0]);
            }
            const res_url = await cloudinary.uploader.upload(profilePic);
            profilePic = res_url.secure_url;
        }

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.password = hashedPassword || user.password;
        user.profilePic = profilePic || user.profilePic;
        user.username = username || user.username;

        await user.save();
        res.status(200).json({ user });
    }
    catch (error) {
        console.log('error in update profile  ', error.message);
        res.status(404).json({ error: "Internal Server error" });
    }
}


const updatePassword=async (req,res)=>{
    const {password,rePassword}=req.body;
    try {
        const user=req.user;
        if(password!==rePassword){
            return res.status(404).json({error:'Passwords do not match'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password=hashedPassword;
        await user.save();
        res.status(200).json({message:'Password updated successfully'});
        
    } catch (error) {
        
    }
}

const GetMyTickets = async (req, res) => {
    const userId = req.user._id;
    try {
        const myTickets = await Ticket.find({
            user: userId
        }).populate({
            path: 'bus'
        });

        res.status(200).json(myTickets);
    } catch (error) {
        console.log('Error in get my tickets', error.message);
        res.status(404).json({ error: 'Internal Server error' });
    }
}


const GetMe = async (req, res) => {
    const user = req.user;

    if (user) {
        return res.json(user);
    }
    else {
        return res.json({ error: "Unathorized" });
    }
}



export { SignUp, Login, updateProfile, GetMyTickets, GetMe, Logout, verifyEmail,ResetPassword,VerifyPasswordToken,updatePassword };