import Bus from '../models/bus.model.js';
import Ticket from '../models/ticket.model.js';


const BookTicket=async(req,res)=>{
    try{
        const busId=req.body.busId;
        const bus=await Bus.findById(busId);
        if(!bus){
            return res.json({error:'Bus not found'});
        }

        const user=req.user;
        const ticket=await Ticket.create({
            bus:bus._id,
            user:user._id
        });
        user.tickets.push(ticket._id);
        await user.save();
        res.status(201).json({
            status:'success',
            ticket
        });
    }catch(error){
        console.log("Error in BookTicket controller",error.message)
        res.status(400).json({
            status:'fail',
            error:'Internal server error'
        });
    }
}

const GetTicket=async(req,res)=>{
    const {id}=req.params;
    try {
        const ticket=await Ticket.findById(id).populate({
            path:'bus'
        });
        if(!ticket){
            return res.status(404).json({
                status:'fail',
                error:'Ticket not found'
            });
        }
        res.status(200).json({
            status:'success',
            ticket
        });
    } catch (error) {
        console.log('Error in GetTicket controller',error.message);
        res.status(400).json({
            status:'fail',
            error:'Internal server error'
        });
    }
}

export {BookTicket,GetTicket};

