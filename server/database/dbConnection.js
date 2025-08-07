import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Authentication_System"
    }).then(() => {
        console.log("Connected to database.");
    }).catch(err => {
        console.log(`Some error occur while connecting to database: ${err}`);
    })
}