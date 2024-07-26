import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {v2 as cloudinary} from 'cloudinary';



import connectDB from './db/connectDB.js';
import UserRoutes from './routes/user.routes.js';
import TicketRoutes from './routes/ticket.routes.js'
import BusRoutes from './routes/bus.routes.js'


const app=express();


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));



app.use(express.json({limit:'5mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();

cloudinary.config({
    cloud_name:process.env.Cloudinary_Name,
    api_key:process.env.Cloudinary_Key,
    api_secret:process.env.Cloudinary_Secret_Key
});

const PORT=process.env.PORT;
connectDB();

app.use('/api/auth',UserRoutes);
app.use('/api/ticket',TicketRoutes);
app.use('/api/bus',BusRoutes);


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})