import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    bus:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Bus',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    
},{
    timestamps:true
});

const Ticket=mongoose.model('Ticket',ticketSchema);
export default Ticket;