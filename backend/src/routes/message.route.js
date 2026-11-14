import express from "express";
import { getUsersForSidebar, getConversationsForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

//if we want to use protectRoute for all routes so instead of writing it individualy we can write it globaly.
//router.use(protectRoute);

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/conversations", protectRoute, getConversationsForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, upload.single("media"), sendMessage);
//todo: show this in the frontend

export default router;