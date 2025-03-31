document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const iconDark = document.getElementById("icon-dark");
  const iconLight = document.getElementById("icon-light");

  // Thème par défaut en dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);
  updateIcons(savedTheme);

  // Changer le thème
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

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
