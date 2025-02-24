import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

export async function verifyCredentials(req, res, next) {
    try {
        const bearerToken = req.headers["authorization"];
        if (!bearerToken) throw new Error("Bearer token not provided");
        const token = bearerToken.split(" ")[1];
        const data = jwt.verify(token, process.env.AUTH_SECRET);
        const user = await userModel.findById(data._id);
        if (!user) throw new Error("User not found or you are not logged in");
        req.user = user;
    } catch (e) {
        console.log(e.message);
    }
    next();
}

export async function isLoggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.json({ error: "You are not logged in" });
    }
}
export async function isAdmin(req, res, next) {
    if (req.user.role === "admin") {
        next();
    } else {
        res.json({ error: "You are not an admin" });
    }
}
