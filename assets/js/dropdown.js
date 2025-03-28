document.addEventListener("DOMContentLoaded", () => {
  // Prend toutes les classes "dropdown"
  const dropdowns = document.querySelectorAll(".dropdown");

  // Parcourt chaque "dropdown"
  dropdowns.forEach((dropdown) => {
    // Sélectionne le bouton
    const button = dropdown.querySelector(".dropbtn");

    // Au clique
    button.addEventListener("click", () => {
      // Ajoute ou retire la classe "open" sur le dropdown (pour ouvrir et fermer le menu)
      dropdown.classList.toggle("open");
    });
  });
});
