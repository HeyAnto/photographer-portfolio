document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");

    button.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });
  });
});
