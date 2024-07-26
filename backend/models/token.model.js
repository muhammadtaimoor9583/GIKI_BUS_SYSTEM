import mongoose from "mongoose";

const tokenSchema=new mongoose.Schema({
    token:{
        type:String,
        require:true
    },
    exp:Date,
},{
    timestamps:true
});

const Token=new mongoose.model('Token',tokenSchema);
export default Token;