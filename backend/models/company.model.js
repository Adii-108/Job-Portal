import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String, 
    },
    website:{
        type:String // URL to company website
    },
    location:{
        type:String // URL to company location
    },
    logo:{
        type:String // URL to company logo
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', // this will reference the user collection
        required:true
    }
},{timestamps:true})
export const Company = mongoose.model("Company", companySchema);