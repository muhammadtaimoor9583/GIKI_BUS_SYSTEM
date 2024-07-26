import Bus from '../models/bus.model.js'


const AddBus=async(req,res)=>{
    const {
        busName,
        busNumber,
        busCapacity,
        from,
        to,
        busDate,
        location,
        busDriver,
        driverContact,
        busImage,
    }=req.body;

    try {
       
        if(!busName ||
            !busNumber ||
            !busCapacity ||
            !from ||
            !to ||
            !busDate ||
            !location ||
            !busDriver 
        ){
            return res.status(404).json({
                error:"Fill all fields"
            })
        }
    
        const bus=new Bus({
            busName,
            busNumber,
            busCapacity,
            from,
            to,
            busDate,
            location,
            busDriver,
            driverContact,
            busImage,
        });
        if(!bus){
            return res.json({
                error:"Please enter valid data"
            })
        }
        await bus.save(); 
        
        res.json(bus);

    } catch (error) {
        console.log("error in add bus",error.message);
        return res.json({error: "Internal server error"});
    }
}

const GetBus=async(req,res)=>{
    const {id:busId}=req.params;
    try {
        const bus=await Bus.findById(busId);
        if(!bus){
           return res.status(404).json({error:"Bus not found"});
        }
        res.json(bus);
        
    } catch (error) {
        console.log('Error in GetBus controller',error.message);
        return res.json({error: "Internal Server error"});
    }
}

const GetAllBuses=async(req,res)=>{
    try {
        const buses=await Bus.find();
        if(!buses.length){
            return res.status(404).json({error:'No bus'});
        }
        res.json(buses);
        
    } catch (error) {
        console.log('Error in get all buses controller',error.message);
        return res.json({error:"Internal server error"});
    }
}

const DeleteBus=async(req,res)=>{
    const {id:busId}=req.params;
    try {
        const bus=await Bus.findByIdAndDelete(busId);
        if(!bus){
            return res.status(404).json({error:"Bus not found"});
        }
        res.json(bus);
    } catch (error) {
        console.log('Error in delete bus controller',error.message);
        return res.json({error:"Internal server error"});
    }
}

export {AddBus,GetBus,GetAllBuses,DeleteBus}