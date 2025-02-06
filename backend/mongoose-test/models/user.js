import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function () {
    if (this.isNew || this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.methods.comparePassword = async function (password) {
    try {
        const isValid = await bcrypt.compare(password, this.password);
        return isValid;
    } catch (error) {
        return false;
    }
};

const userModel = model("User", userSchema);
export default userModel;
