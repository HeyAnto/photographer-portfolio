document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "/assets/img/hero/image-hero-1.webp",
    "/assets/img/hero/image-hero-2.webp",
    "/assets/img/hero/image-hero-3.webp",
    "/assets/img/hero/image-hero-4.webp",
    "/assets/img/hero/image-hero-5.webp",
    "/assets/img/hero/image-hero-6.webp",
    "/assets/img/hero/image-hero-7.webp",
  ];

  let index = 0;
  const heroBg = document.querySelector(".hero-background");

  function changeImage() {
    heroBg.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }

  setInterval(changeImage, 3000);
  changeImage();
});
