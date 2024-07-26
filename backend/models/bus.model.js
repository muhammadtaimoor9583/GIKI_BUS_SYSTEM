import mongoose from "mongoose";


const busSchema = new mongoose.Schema({
    busName:{
        type: String,
        required: true
    },
    busNumber:{
        type: String,
        required: true
    },
    
    busCapacity:{
        type: Number,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    busDate:{
        type: Date,
        required:true
    },
    busDriver:{
        type: String,
        required: true
    },
    driverContact:{
        type:String,
        default:''
    },
    busImage:{
        type: String,
        default: ''
    }
    
},{
    timestamps:true
});

const Bus=mongoose.model('Bus',busSchema);
export default Bus;