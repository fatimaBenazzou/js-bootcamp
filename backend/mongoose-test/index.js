import "dotenv/config";

import express from "express";
import mongoose from "mongoose";

import mediaRoutes from "./routes/media.js";
import userRoutes from "./routes/user.js";
import watchHistoryRoutes from "./routes/watchHistory.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use("/media", mediaRoutes);
app.use("/users", userRoutes);
app.use("/watch-history", watchHistoryRoutes);

mongoose
    .connect(process.env.MONGODB_URI, {
        auth: {
            username: process.env.MONGODB_USERNAME,
            password: process.env.MONGODB_PASSWORD,
        },
        dbName: process.env.MONGODB_DBNAME,
    })
    .then(() => {
        console.log("DB is connected");

        app.listen(PORT, () => {
            console.log(`listening on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
        process.exit(-1);
    });
