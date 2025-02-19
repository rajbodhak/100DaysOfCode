import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
    throw new Error("MONGO DB URI NOT CONNECTED");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDataBase() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI, {
            dbName: "Quiz-App",
        });

        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected ✅")
        });

        mongoose.connection.on("error", (err) => {
            console.log("MongoDB connection Error❌", err)
        });

        mongoose.connection.on("disconnected", () => {
            console.warn(" MongoDB Disconnected! ⚠️");
        });
    }
    cached.conn = await cached.promise;
    (global as any).mongoose = cached;

    return cached.conn;
}