import mongoose from "mongoose";

const url = "mongodb+srv://jdiegozg77:CapoWojMw1kTE1uq@cluster0.qemidqs.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log(">>> DB conected");
    } catch (error) {
        console.log(error);
    };
}
