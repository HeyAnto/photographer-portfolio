// Sélectionne toutes les images dans ".card" et boucle
document.querySelectorAll(".card img").forEach((img) => {
  // Ajoute un "click" sur chaque image
  img.addEventListener("click", function () {
    // Change l'image affichée en utilisant la src de l'image cliquée
    document.getElementById("lightbox-img").src = this.src;
    // Affiche la modale
    document.getElementById("lightbox").style.display = "flex";
  });
});

// Bouton de fermeture
document
  .getElementById("close-lightbox")
  .addEventListener("click", function () {
    // Cache la modale
    document.getElementById("lightbox").style.display = "none";
  });

// Fermer au clique sur l'overlay
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
