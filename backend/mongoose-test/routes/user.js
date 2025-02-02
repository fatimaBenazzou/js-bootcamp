import { Router } from "express";
import userModel from "../models/user.js";
const router = Router();

router
    .route("/")
    .post(async (req, res) => {
        const user = req.body;

        try {
            const newUser = await userModel.create(user);
            res.json({ data: newUser, status: "success" });
        } catch (error) {
            res.status(500).json({ message: error.message, status: "error" });
        }
    })
    .get(async (req, res) => {
        try {
            const users = await userModel.find();
            res.json({ data: users, status: "success" });
        } catch (e) {
            res.status(500).json({
                message: e.message,
                status: "failed",
            });
        }
    });

export default router;
