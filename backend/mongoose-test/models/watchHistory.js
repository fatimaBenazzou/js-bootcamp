import { model, Schema } from "mongoose";

const watchHistorySchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        media: { type: Schema.Types.ObjectId, ref: "Media", required: true },
        watchedEpisodes: { type: Number, min: 0, default: 0 }, // Pour les séries/animes
        completed: { type: Boolean, default: false }, // Indique si l'utilisateur a fini le programme
        watchedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);
const WatchHistoryModel = model("WatchHistory", watchHistorySchema);
export default WatchHistoryModel;
