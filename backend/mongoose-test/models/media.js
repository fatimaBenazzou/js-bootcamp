import { model, Schema } from "mongoose";

const mediaSchema = new Schema(
    {
        title: { type: String, required: true, maxLength: 150, unique: true },
        genres: { type: [String], default: [] },
        rating: {
            value: { type: Number, min: 0, max: 10, default: 0 },
            count: { type: Number, min: 0, default: 0 },
        },
        releaseYear: { type: Number, required: true },
    },
    {
        timestamps: true,
        discriminatorKey: "type",
    }
);

const mediaModel = model("Media", mediaSchema);

const tvShowSchema = new Schema(
    {
        episodes: { type: Number, min: 1, default: 0 },
        completed: { type: Boolean, default: false },
    },
    { discriminatorKey: "type" }
);
const movieSchema = new Schema(
    {
        duration: Number,
    },
    { discriminatorKey: "type" }
);

export const tvShowModel = mediaModel.discriminator("TvShow", tvShowSchema, {
    discriminatorKey: "type",
});
export const movieModel = mediaModel.discriminator("Movie", movieSchema, {
    discriminatorKey: "type",
});
export default mediaModel;
