import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mukamajoseph67:Mukama1@2@cluster0.h8bxy.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
