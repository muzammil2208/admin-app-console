import mongoose from 'mongoose';
export default function mongooseConnect()
{
   
    if(mongoose.connection.readyState === 1)
    {
        return mongoose.connection.asPromise
    }
    else
    {
        const uri =process.env.MONGODB_URI;
        console.log("mongoose connected")
        return mongoose.connect(uri);
    }
}