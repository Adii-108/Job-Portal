import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:["student","recruiter"], //enum is used to restrict the value of role to either user or admin
        required:true
    },
    profile:{
        bio:{
            type:String,
        },
        skills:[{
            type:String
        }],
       resume:{
        type:String // this will store the path to the resume file
       }, 
       resumeOriginalName:{
        type:String // this will store the original name of the resume file
       },
       company:{
        type:mongoose.Schema.Types.ObjectId, // this will create a relationship between the user and the company collection
        ref:"Company" // this will reference the company collection
        },
        profilePhoto:{
            type:String, // this will store the path to the profile photo
            default:"" // this will set the default value of profile photo to an empty string

        }

    },
},{timestamps:true});

export const User=mongoose.model("User",userSchema);
