// Sélectionne l'élément "copy-email" et ajoute un écouteur d'événement au clic
document.getElementById("copy-email").addEventListener("click", function () {
  // Adresse email à copier
  const email = "JOHN@PHOTOGRAPHY.COM";

  // Utilise l'API Clipboard pour copier l'email dans le presse-papiers
  navigator.clipboard
    .writeText(email) // Copie l'email
    .then(() => {
      // Affiche une alerte si la copie a réussi
      alert("Email copié !");
    })
    .catch((err) => {
      // Affiche une erreur dans la console si la copie échoue
      console.error("Erreur lors de la copie : ", err);
    });
});
