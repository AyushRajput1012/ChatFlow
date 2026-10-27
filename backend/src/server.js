//const express = require('express');
import express from 'express';
import "dotenv/config";
import cors from 'cors';
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from '@clerk/express';

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware())

app.get('/health',(req,res) =>{
    res.status(200).json({ok:true, message:"Server is healthy"})
} );

app.listen(3000, () =>{
    connectDB();
    console.log("Server is running on port 3000")
});