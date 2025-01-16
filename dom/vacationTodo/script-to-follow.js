// 1. Sélectionnez les éléments du DOM nécessaires :
//    - Le formulaire où l'utilisateur entre les nouvelles tâches.
//    - Le bouton pour ajouter des tâches.
//    - La liste où seront affichées les tâches.

// 2. Initialisez une variable pour garder la trace du nombre d'éléments dans la liste (par exemple `listLength`).

// 3. Créez une fonction `generateTemplate(todo)` :
//    - Cette fonction doit générer un élément HTML `<li>` contenant :
//      - Une case à cocher pour marquer la tâche comme complétée.
//      - Une étiquette `<label>` affichant le texte de la tâche.
//      - Deux `<span>` pour les actions :
//        - Un pour modifier la tâche avec une classe CSS comme `raphael--pensil`.
//        - Un pour supprimer la tâche avec une classe CSS comme `ic--baseline-delete`.
//    - Ajoutez cet élément HTML à la liste des tâches.

// 4. Créez une fonction `addTodos(e)` :
//    - Prévenez le comportement par défaut du formulaire (rechargement de la page).
//    - Récupérez le texte entré par l'utilisateur dans le champ d'entrée, en supprimant les espaces inutiles.
//    - Vérifiez que l'entrée n'est pas vide.
//    - Incrémentez la variable `listLength` pour maintenir un ID unique pour chaque case à cocher.
//    - Appelez `generateTemplate(todo)` pour ajouter la nouvelle tâche à la liste.
//    - Réinitialisez le formulaire.

// 5. Créez une fonction `deleteTodos(e)` :
//    - Vérifiez si l'élément cliqué a la classe `ic--baseline-delete`.
//    - Si oui, supprimez l'élément `<li>` correspondant en remontant dans le DOM.

// 6. Créez une fonction `editTodos(e)` :
//    - Vérifiez si l'élément cliqué a la classe `raphael--pensil`.
//    - Si oui, récupérez le texte actuel de la tâche dans l'étiquette `<label>`.
//    - Affichez une boîte de dialogue (prompt) pour demander à l'utilisateur d'entrer le texte mis à jour.
//    - Si un nouveau texte valide est entré, mettez à jour le contenu de l'étiquette `<label>`.

// 7. Ajoutez des gestionnaires d'événements :
//    - L'événement "submit" sur le formulaire pour appeler la fonction `addTodos`.
//    - L'événement "click" sur le bouton d'ajout pour appeler la fonction `addTodos`.
//    - L'événement "click" sur la liste des tâches pour gérer les actions de suppression et de modification.

// 8. Testez votre code :
//    - Assurez-vous que vous pouvez ajouter une tâche, la modifier, et la supprimer.
