import { Router } from "express";
import mediaModel, { movieModel, tvShowModel } from "../models/media.js";
const router = Router();

router
    .route("/")
    .post(async (req, res) => {
        const { type, ...media } = req.body;

        try {
            let newMedia;
            switch (type) {
                case "Movie":
                    newMedia = await movieModel.create(media);
                    break;
                case "TvShow":
                    newMedia = await tvShowModel.create(media);
                    break;
                default:
                    throw new Error("Invalid media type ");
            }
            res.json({ data: newMedia, status: "success" });
        } catch (error) {
            res.json({ message: error.message, status: "error" });
        }
    })
    .get(async (req, res) => {
        try {
            const medias = await mediaModel.find();
            res.json({ data: medias, status: "success" });
        } catch (error) {
            res.json({ message: error.message, status: "error" });
        }
    });

router
    .route("/:mediaId")
    .get(async (req, res) => {
        const { mediaId } = req.params;
        try {
            const media = await mediaModel.findById(mediaId);
            if (!media) throw new Error("Media not found");

            res.json({ data: media, status: "success" });
        } catch (error) {
            res.json({ message: error.message, status: "error" });
        }
    })
    .put(async (req, res) => {
        const { mediaId } = req.params;
        const updateData = req.body;
        try {
            const media = await mediaModel.findById(mediaId);
            if (!media) throw new Error("Media not found");

            Object.keys(updateData).forEach((key) => {
                media[key] = updateData[key];
            });

            await media.save();
            res.json({ data: media, status: "success" });
        } catch (error) {
            res.json({ message: error.message, status: "error" });
        }
    })
    .delete(async (req, res) => {
        const { mediaId } = req.params;
        try {
            const deletedMedia = await mediaModel.findByIdAndDelete(mediaId);
            res.json({ data: deletedMedia, status: "success" });
        } catch (error) {
            res.json({ message: error.message, status: "error" });
        }
    });

export default router;
