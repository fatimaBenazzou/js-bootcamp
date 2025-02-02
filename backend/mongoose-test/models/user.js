import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            maxLength: 255,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "is not a valid email address"],
        },
        username: { type: String, required: true, maxLength: 55, unique: true },
        password: { type: String, required: true, minLength: 8 },
        isVerified: { type: Boolean, default: false },
        role: { type: String, enum: ["admin", "user"], default: "user" },
        favoriteGenres: { type: [String], default: [] },
        profilePicture: { type: String, default: "" },
    },
    {
        timestamps: true,
    }
);

const userModel = model("User", userSchema, "Users");
export default userModel;
