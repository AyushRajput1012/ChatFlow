import mongoose from "mongoose";
import dns from "node:dns";

// Set custom DNS servers
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MONGO_URI is required");
        }

        const conn = await mongoose.connect(mongoUri);

        console.log("MongoDB connected:", conn.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}