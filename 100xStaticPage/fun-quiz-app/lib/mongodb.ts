/* eslint-disable no-var */

import mongoose from "mongoose";

// Ensure MONGO_URI is always a string
const MONGO_URI: string = process.env.MONGO_URI || "";

if (!MONGO_URI) {
    throw new Error("❌ MONGO DB URI NOT CONNECTED");
}

// Define a proper cache type
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

// Use global cache for better reusability
declare global {
    var mongooseCache: MongooseCache;
}

global.mongooseCache = global.mongooseCache || { conn: null, promise: null };

export async function connectToDataBase() {  // 👈 Changed back to match your function name
    if (global.mongooseCache.conn) return global.mongooseCache.conn;

    if (!global.mongooseCache.promise) {
        global.mongooseCache.promise = mongoose.connect(MONGO_URI, {
            dbName: "Quiz-App",
        });

        mongoose.connection.on("connected", () => {
            console.log("✅ MongoDB connected");
        });

        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ MongoDB Disconnected!");
        });
    }

    global.mongooseCache.conn = await global.mongooseCache.promise;
    return global.mongooseCache.conn;
}

// ✅ Ensure it's correctly exported
export default connectToDataBase;
