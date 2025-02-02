import { model, Schema } from "mongoose";

const mediaSchema = new Schema(
    {
        title: { type: String, required: true, maxLength: 150, unique: true },
        type: { type: String, enum: ["anime", "serie", "movie"], required: true },
        genres: { type: [String], default: [] },
        rating: { type: Number, min: 0, max: 10, default: 0 },
        episodes: { type: Number, min: 1, default: 0 },
        duration: Number,
        completed: { type: Boolean, default: false },
        releaseYear: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const mediaModel = model("Media", mediaSchema, "Medias");

export default mediaModel;
