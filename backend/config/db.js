import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://joseph010:Mukama1@2@cluster0.fwsrv.mongodb.net/Cluster0').then(()=>console.log("DB Connected"));
}