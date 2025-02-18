import "dotenv/config";
import express from "express";
import logger from "./config/logger.js";
import morgan from "morgan";
import cors from "cors";
import dbConnection from "./config/db.js";
import v1Router from "./routes/v1.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.set("trust proxy", true);
app.use(
    cors({
        origin: (origin, callback) => {
            return callback(null, origin);
            if (origin === "http://localhost:5173") callback(null, origin);
            else callback(new Error("Invalid origin"));
        },
        credentials: true,
    })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", v1Router);

dbConnection.then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening to http://localhost:${PORT}`);
        logger.warn(`Server listening on ${PORT}`);
    });
});
