import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = {};

const connectDB = async () => {
    if (connection.isConnected) {
        console.log('Using existing connection');
        return;
    }
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connection.isConnected = connect.connections[0].readyState;
        console.log('DB Connected:', connection.isConnected);
    } catch (error) {
        console.error('DB Connection Error:', error);
        process.exit(1);
    }
};

export default connectDB;
