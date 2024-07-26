import jwt from 'jsonwebtoken';

import User from '../models/user.model.js'

const protectRoute = async (req, res, next) => {
    
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(404).json({error:"Unathorized access"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user=await User.findById(decoded.userId);
        req.user=user;
        next();
    } catch (error) {
        console.log('Error in protect route', error.message);
        return res.status(401).json({ error: 'Not Authorized' });
    }
}

export default protectRoute;