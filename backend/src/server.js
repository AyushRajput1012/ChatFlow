//const express = require('express');
import express from 'express';
import "dotenv/config";
import cors from 'cors';
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebhook from "./webhooks/clerk.webhook.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


import fs from "fs";
import path from "path"
import { app, server } from './lib/socket.js';



const FRONTEND_URL = process.env.FRONTEND_URL;
const PORT = process.env.PORT || 3000;

const publicDir = path.join(process.cwd(),"public");

//it is important that u dont parse the webhook event data, it should be in the raw format
app.use("/api/webhooks/clerk", express.raw({type:"application/json"}), clerkWebhook);

app.use(express.json());
app.use(cors({origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware())

app.get('/health',(req,res) =>{
    res.status(200).json({ok:true, message:"Server is healthy"})
} );

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

//if the public directory exists, serve the static files
//this is for the production build 
if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir));

    app.get("/{*any}", (req, res, next) => {

        if (req.path === "/api" || req.path.startsWith("/api/")) {
            return next();
        }

        res.sendFile(
            path.join(publicDir, "index.html"),
            (err) => next(err)
        );
    });
}

const startServer = async () => {
    try {
        await connectDB();

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();