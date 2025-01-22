import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4444;

app.use(morgan("tiny"));
const user = {
    firstName: "Fatima",
    lastName: "Benazzou",
    note: 15,
    skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Redux Toolkit", level: "Intermediate" },
        { name: "React Native", level: "Intermediate" },
        { name: "Node.js", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Angular", level: "Intermediate" },
        { name: "HTML & CSS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Basic" },
        { name: "Figma", level: "Basic" },
    ],
};
app.set("view engine", "ejs");
function Dexter(req, res, next) {
    const startingTime = Date.now();
    next();
    const timeTaken = Date.now() - startingTime;
    console.log(`${req.method} / ${req.url} - ${timeTaken}ms ${res.statusCode}`);
}

app.use(Dexter);
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("./public"));

const fileError = (res) => (err, html) => {
    if (err) res.status(404).send("File not found");
    else res.send(html);
};

app.get("/", (req, res) => {
    res.render("home", fileError(res));
});

app.post("/note", (req, res) => {
    console.log(req.body);
    user.note = Number(req.body["exam-note"]);
    res.render("note", fileError(res));
});

app.get("/about", (req, res) => {
    res.locals = { user };
    res.render("about", fileError(res));
});

app.listen(PORT, () => {
    console.log("Server is listening" + PORT);
    console.log(`http://localhost:${PORT}`);
});
