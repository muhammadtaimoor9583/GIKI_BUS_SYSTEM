import jwt from 'jsonwebtoken';

const setCookie=async(userId,res)=>{
    try{
    const token=jwt.sign({userId},process.env.JWT_SECRET);
    res.cookie("jwt",token,{
        httpOnly:true,
        sameSite:'strict',
        maxAge: 15 * 24 * 60 * 60 * 1000 
    });
}
catch(error){
    console.log('Error in setting cookie',error.message);
    return res.status(500).json({error:error.message});
}

}

export default setCookie;