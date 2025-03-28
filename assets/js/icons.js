// Sélectionne tous les éléments
const objectElements = document.querySelectorAll(".icon");

// Parcourt chaque élément <object>
objectElements.forEach((objectElement) => {
  // Écoute le chargement du SVG
  objectElement.addEventListener("load", () => {
    // Accède au DOM du SVG
    const svgDoc = objectElement.contentDocument;
    // Cible l'élément <svg>
    const svgElement = svgDoc.querySelector("svg");
    // Récupère la couleur CSS --icon-color
    const color =
      getComputedStyle(objectElement).getPropertyValue("--icon-color");
    // Vérifie si tout est valide et applique la couleur
    if (svgElement && color) {
      svgElement.style.color = color.trim(); // Supprime les espaces
    }
  });
});
