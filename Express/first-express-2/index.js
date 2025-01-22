import express from "express";

// Importer le middleware Morgan pour enregistrer les requêtes HTTP dans la console.
// Cela aide à déboguer et surveiller les requêtes entrantes.
import morgan from "morgan";

const app = express();

// Définir le port sur lequel le serveur écoutera.
// Rappel : Les ports de 1 à 1 024 sont réservés pour des services système. Utiliser un port au-delà de 2 000 pour éviter les conflits.
const PORT = 7459;

// Définir un objet utilisateur avec des données dynamiques pour démonstration.
const user = {
    firstName: "Fatima",
    lastName: "BENAZZOU",
    note: 12,
};

// Activer Morgan pour afficher des informations sur les requêtes HTTP dans la console.
// Exemple : Méthode HTTP, URL, statut, temps de réponse.
app.use(morgan("dev"));

// Activer le middleware pour analyser les données envoyées dans un formulaire HTML.
// Cela permet d'accéder aux données envoyées dans req.body.
app.use(express.urlencoded({ extended: true }));

// Définir le dossier racine contenant les fichiers HTML à servir.
// Tous les fichiers HTML se trouvent dans le dossier "./views".
const config = { root: "./views" };

// Fonction de gestion des erreurs pour les fichiers HTML.
// - Si le fichier n'existe pas, renvoyer une erreur 404.
// - En cas d'autres erreurs, renvoyer un message générique.
const fileError = (res) => (err) => {
    if (!err) return;
    if (err.message.includes("ENOENT")) res.status(404).send("File not found");
    else res.send("Internal server error");
};

// Ajouter un middleware pour servir des fichiers statiques.
// Cela permet d'accéder aux fichiers CSS, images, JavaScript, etc., depuis le dossier "./public".
// Exemple : Un fichier CSS peut être lié dans un fichier HTML via `<link href="/public/style.css" rel="stylesheet" />`.
app.use("/public", express.static("./public"));

// Route GET pour la page d'accueil ("/").
// - Le contenu HTML est extrait dans un fichier séparé "home.html" pour une meilleure organisation.
// - Cela permet également d'utiliser des suggestions de code et d'éviter un fichier serveur trop long.
app.get("/", (req, res) => {
    // Envoyer le fichier HTML situé dans le dossier défini par `config`.
    // En cas d'erreur (fichier manquant, etc.), appeler la fonction `fileError`.
    res.sendFile("home.html", config, fileError(res));
});

// Route POST pour "/note" : réception des données du formulaire.
// - La note saisie par l'utilisateur est récupérée via `req.body["exam-note"]`.
// - La note de l'utilisateur est mise à jour dynamiquement.
// - Envoie la page "received-note.html" en réponse pour confirmer la réception.
app.post("/note", (req, res) => {
    console.log(req.body); // Affiche les données du formulaire dans la console pour vérification.
    user.note = Number(req.body["exam-note"]); // Met à jour la note avec la valeur saisie.
    res.sendFile("received-note.html", config, fileError(res)); // Envoie la page HTML confirmant la réception.
});

// Route GET pour "/about" : affichage des données dynamiques de l'utilisateur.
// - Génère une page HTML simple affichant les informations de l'utilisateur.
// - Les données affichées incluent les valeurs dynamiques de `user`.
app.get("/about", (req, res) => {
    res.send(`<div>
            <h2>${user.firstName} ${user.lastName}</h2>
            <p>My note is : ${user.note}</p>
        </div>
    `);
});

// Lancer le serveur et écouter sur le port défini.
// Afficher des messages dans la console pour indiquer que le serveur est opérationnel.
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
    console.log(`http://localhost:${PORT}`);
});
