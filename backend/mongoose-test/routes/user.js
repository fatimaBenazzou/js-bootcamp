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

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) throw new Error("User not found");
        if (!(await user.comparePassword(password))) throw new Error("email/password incorrect.");

        res.json({ date: user, status: "success" });
    } catch (e) {
        res.status(500).json({
            message: e.message,
            status: "failed",
        });
    }
});

router
    .route("/:userId")
    .get(async (req, res) => {
        const { userId } = req.params;
        try {
            const user = await userModel.findById(userId);
            if (!user) throw new Error("User not found");

            res.json({ data: user, status: "success" });
        } catch (error) {
            res.json({ message: error.message, status: "error" });
        }
    })
    .put(async (req, res) => {
        const { userId } = req.params;
        const updateData = req.body;
        try {
            const user = await userModel.findById(userId);
            if (!user) throw new Error("User not found");

            Object.keys(updateData).forEach((key) => {
                user[key] = updateData[key];
            });

            await user.save();
            res.json({ data: user, status: "success" });
        } catch (error) {
            res.json({ message: error.message, status: "error" });
        }
    })
    .delete(async (req, res) => {
        const { userId } = req.params;
        try {
            const deletedUser = await userModel.findByIdAndDelete(userId);
            res.json({ data: deletedUser, status: "success" });
        } catch (error) {
            res.json({ message: error.message, status: "error" });
        }
    });

export default router;
