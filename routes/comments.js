import express from "express";
import { getComment } from "../controllers/comment.js";

const router = express.Router()

router.get("/test", (req,res) => {
    res.send("API working!");
})

export default router;