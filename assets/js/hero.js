document.addEventListener("DOMContentLoaded", () => {
  // Tableau contenant les url des images
  const images = [
    "assets/img/hero/image-hero-1.webp",
    "assets/img/hero/image-hero-2.webp",
    "assets/img/hero/image-hero-3.webp",
    "assets/img/hero/image-hero-4.webp",
    "assets/img/hero/image-hero-5.webp",
    "assets/img/hero/image-hero-6.webp",
    "assets/img/hero/image-hero-7.webp",
  ];

  // Démarre à l'index 0 du tableau
  let index = 0;

  // Élément qui servira de fond
  const heroBg = document.querySelector(".hero-background");

  // Fonction pour changer l'image
  function changeImage() {
    // Modifie l'image de fond en utilisant l'index actuel
    heroBg.style.backgroundImage = `url(${images[index]})`;

    // +1 à l'index et boucle si on dépasse la longueur du tableau
    index = (index + 1) % images.length;
  }

  setInterval(changeImage, 3000);

  changeImage();
});
