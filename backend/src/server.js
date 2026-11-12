//const express = require('express');
import express from 'express';
import "dotenv/config";
import cors from 'cors';
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from '@clerk/express';
import job from "./cron.js";

import fs from "fs";
import path from "path"

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL;
const PORT = process.env.PORT || 3000;

const publicDir = path.join(process.cwd(),"public");

app.use(express.json());
app.use(cors({origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware())

app.get('/health',(req,res) =>{
    res.status(200).json({ok:true, message:"Server is healthy"})
} );

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

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            if(process.env.NODE_ENV === "production") {
                job.start();
            }
        });

    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();