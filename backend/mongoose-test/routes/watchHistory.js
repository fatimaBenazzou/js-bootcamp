import { Router } from "express";
import mongoose from "mongoose";
import watchHistoryModel from "../models/watchHistory.js";
import userModel from "../models/user.js";
import mediaModel from "../models/media.js";

const router = Router();

router.route("/").post(async (req, res) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const watchData = req.body;

        const userId = watchData.userId;
        const mediaId = watchData.mediaId;
        if (!userId) throw new Error(`You did not provide a user id'`);
        if (!mediaId) throw new Error(`You did not provide a user id'`);
        const [user, media] = await Promise.all([
            userModel.findById(userId),
            mediaModel.findById(mediaId),
        ]);
        if (!user) throw new Error(`user not found`);
        if (!media) throw new Error(`media not found`);

        // Créer l'entrée dans l'historique de visionnage dans la transaction
        const [newWatchEntry] = await watchHistoryModel.create([{ ...watchData }], { session });

        media.rating.value =
            (media.rating.value * media.rating.count + newWatchEntry.rating) /
            (media.rating.count + 1);
        media.rating.count++;
        await media.save({ session });

        // Valider la transaction
        await session.commitTransaction();

        res.json({ data: newWatchEntry, status: "success" });
    } catch (e) {
        console.log(e);
        // Annuler la transaction en cas d'erreur
        await session.abortTransaction();

        res.status(500).json({
            message: e.message,
            status: "failed",
        });
    } finally {
        session.endSession();
    }
});

export default router;
