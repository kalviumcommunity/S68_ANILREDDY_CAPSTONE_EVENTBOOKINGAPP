const {connect}= require('mongoose');

const connectDB = async () =>{
    try{
        await connect(process.env.MONGO_URI);
        console.log('mongoBD connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
}

module.exports = connectDB;

