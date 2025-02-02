import { Router } from "express";
import mediaModel from "../models/media.js";
const router = Router();

router
    .route("/")
    .post(async (req, res) => {
        const media = req.body;

        try {
            const newMedia = await mediaModel.create(media);
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
        const media = req.body;
        try {
            const updatedMedia = await mediaModel.findByIdAndUpdate(mediaId, media, { new: true });
            res.json({ data: updatedMedia, status: "success" });
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
