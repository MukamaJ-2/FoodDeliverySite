import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mukama67:Mukama12@cluster0.1mpm8.mongodb.net/food-deliverysite').then(()=>console.log("DB Connected"));
}