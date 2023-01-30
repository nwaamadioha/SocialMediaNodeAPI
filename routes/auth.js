import express from "express";
import { getAuth } from "../controllers/auth.js";

const router = express.Router()

router.get("/test", (req,res) => {
    res.send("API working!");
})

export default router;