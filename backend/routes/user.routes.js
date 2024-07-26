import express from 'express'


import { GetMe, GetMyTickets, Login, Logout, SignUp, updateProfile,verifyEmail,ResetPassword,VerifyPasswordToken, updatePassword } from '../controllers/user.controllers.js';
import protectRoute from '../middleware/protectRoute.js';



const router=express.Router();


router.post('/signup',verifyEmail);
router.post('/verify/:token',SignUp);

router.post('/login',Login);
router.post('/logout',Logout);

router.post('/reset',ResetPassword);
router.post('/verify/password/:token',VerifyPasswordToken);

router.post('/update',protectRoute,updateProfile);
router.post('/updatepassword',protectRoute,updatePassword);
router.get('/',protectRoute,GetMyTickets);
router.get('/me',protectRoute,GetMe);




export default router;