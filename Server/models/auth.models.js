import mongoose from "mongoose";

const newUser=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    busiName:{
        type:String,
    },
    busiType:{
        typr:String,
    }
})

const User=mongoose.model("ValueUser",newUser)
export default User;