// 1- Importer le module express pour pouvoir créer une application web avec des routes et gérer les requêtes HTTP.
import express from "express";

// 2- Créer une instance de l'application express.
// C'est cette instance qui nous permettra de configurer les routes, les middlewares et les comportements de notre serveur.
const app = express();

// 5- Définir une constante pour le port d'écoute du serveur.
// Pourquoi une variable ? Cela rend le port facile à changer en fonction des besoins.
// Les plages de ports disponibles sont de 1 à 65 535.
// - Les ports de 1 à 1 024 sont réservés pour des services système (ex. SSH, HTTP).
// - Il est recommandé d'élargir l'utilisation à partir de 2 000 pour éviter les conflits avec d'autres applications système.
// - Les ports les plus couramment utilisés pour le développement web sont 3000 et 5000.
const PORT = 7459;

// 11- Ajouter un objet utilisateur pour simuler des données dynamiques.
// Ces données peuvent être modifiées et utilisées dans les différentes routes pour démontrer la gestion des données côté backend.
const user = {
    firstName: "Fatima",
    lastName: "Benazzou",
    note: 12, // La note initiale
};

// 15- Ajouter un middleware pour analyser les données envoyées via des formulaires HTML.
// Cela permet de parser les données encodées en URL (format par défaut des formulaires HTML) et d'y accéder via req.body.
app.use(express.urlencoded({ extended: true }));

// 6- Créer une route GET pour la racine ("/").
// Cette route répond aux requêtes GET envoyées au serveur à l'URL "http://localhost:PORT/".
// Les méthodes HTTP (GET, POST, PUT, DELETE) permettent de définir différents comportements pour une même URL.

// 8- Dans cette route, on utilise deux objets :
// - `req` (requête) : Ce que l'utilisateur envoie au serveur (exemple : paramètres, données de formulaire).
// - `res` (réponse) : Ce que le serveur renvoie à l'utilisateur (exemple : HTML, JSON, etc.).

// 9- La réponse contient du contenu HTML généré dynamiquement.
app.get("/", (req, res) => {
    // La méthode `res.send()` permet d'envoyer une réponse HTML au navigateur.
    // 12- On inclut ici un formulaire HTML qui permettra à l'utilisateur de saisir une nouvelle note.
    // Le formulaire utilise la méthode POST et envoie les données vers la route "/note".
    res.send(`
        <h1>Hello from the backend</h1>
        <a href="/about">Take me to About Me</a>
        <form method="POST" action="/note">
            <input type="number" name="exam-note" max="20" min="0" />
            <button type="submit">
                Submit
            </button>
        </form>
    `);
});

// 13- Créer une route POST pour "/note" pour traiter les données envoyées par le formulaire.
// Cette route est appelée lorsque l'utilisateur soumet le formulaire défini dans la route "/".
app.post("/note", (req, res) => {
    // 14- Les données envoyées dans le formulaire sont accessibles via req.body.
    // Cela nécessite d'utiliser le middleware `express.urlencoded` (déclaré précédemment).
    console.log(req.body); // Affiche les données envoyées dans la console (exemple : { "exam-note": "15" }).

    // On accède à la valeur de "exam-note" (nom du champ dans le formulaire) et on met à jour la note de l'utilisateur.
    user.note = Number(req.body["exam-note"]);

    // On envoie une réponse simple avec un lien vers la route "/about".
    res.send(`<a href="/about">Take me to About Me</a>`);
});

// 10- Ajouter une route GET pour "/about" qui affiche les informations sur l'utilisateur.
// Cette route sert d'exemple pour afficher des données dynamiques directement dans la réponse HTML.
app.get("/about", (req, res) => {
    // 12- La réponse inclut des informations dynamiques issues de l'objet `user`.
    res.send(`<div>
            <h2>${user.firstName} ${user.lastName}</h2>
            <p>My note is: ${user.note}</p>
        </div>
    `);
});

// 3- Lancer le serveur et l'écouter sur le port défini.
// Cela signifie que notre application sera accessible via "http://localhost:PORT".
app.listen(PORT, () => {
    // 4- Afficher des messages dans la console pour confirmer que le serveur fonctionne correctement.
    console.log("Server is listening on port " + PORT);
    console.log(`http://localhost:${PORT}`);
});
