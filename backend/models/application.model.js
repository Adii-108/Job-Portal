import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job', // this will reference the job collection
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', // this will reference the user collection
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'], //enum is used to restrict the value of status to either pending, accepted or rejected
        default:'pending'
    }
},{timestamps:true});
export const Application  = mongoose.model("Application", applicationSchema);