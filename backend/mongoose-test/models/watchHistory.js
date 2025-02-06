import { model, Schema } from "mongoose";

const watchHistorySchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
        mediaId: { type: Schema.Types.ObjectId, ref: "Media", required: true, index: true },
        watchedEpisodes: { type: [Number], default: [] },
        progress: { type: Number, max: 100, default: 0 },
        completed: { type: Boolean, default: false },
        rating: { type: Number, min: 0, max: 10, default: 0 },
        notes: { type: String, default: "" },
        lastWatched: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

const watchHistoryModel = model("WatchHistory", watchHistorySchema);
export default watchHistoryModel;
