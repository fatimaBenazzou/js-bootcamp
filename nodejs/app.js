import EventEmitter from "events";

// Créer un émetteur d'événements pour le chat
const chatApp = new EventEmitter();

chatApp.on("message", (user, message) => {
    console.log(`[${user}] : ${message}`);
});

chatApp.on("message", (user, message) => {
    console.log(`Message logged for user: ${user}`);
});

chatApp.emit("message", "Alice", "Hello!");
chatApp.emit("message", "Bob", "Hi there!");
