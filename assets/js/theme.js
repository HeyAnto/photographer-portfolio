document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const iconDark = document.getElementById("icon-dark");
  const iconLight = document.getElementById("icon-light");

  // Définir le thème par défaut en dark si rien n'est stocké
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);
  updateIcons(savedTheme);

  // Ajouter un événement au clic pour changer le thème
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark"; // Correction ici

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcons(newTheme);
  });

  // Fonction pour afficher la bonne icône
  function updateIcons(theme) {
    iconDark.style.display = theme === "dark" ? "block" : "none";
    iconLight.style.display = theme === "light" ? "block" : "none";
  }
});
