import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true,
        default:'student'
    },
    profilePic:{
        type: String,
        default: ''
    },
    username:{
        type:String,
        required:true
    },
    tickets:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Ticket'
            }
        ],
        default:[]
    }


},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
export default User;