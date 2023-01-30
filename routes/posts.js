import express from "express";
import { getPost } from "../controllers/post.js";

const router = express.Router()

router.get("/test", (req,res) => {
    res.send("API working!");
})

export default router;