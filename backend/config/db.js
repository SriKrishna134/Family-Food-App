import mongoose from "mongoose";
// connect  db //
export const connectDB = async () => {
    await mongoose.connect('mongodb+SERVER').then(()=>console.log("DB Connected"));
}
