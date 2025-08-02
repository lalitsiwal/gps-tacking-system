import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const dbconnection = await mongoose.connect(process.env.MONGO_URI)
        if(dbconnection) console.log("DB CONNECTED");
    } catch (error) {
        console.error("MONGO CONNECTION ERROR :" +error);
    }
    
}

export default connectDB;
