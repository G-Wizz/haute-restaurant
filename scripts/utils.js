const burgerMenu = document.querySelector(".burger-menu");

const miniMenu = document.querySelector(".mini-menu");

burgerMenu.addEventListener("click", () => {
  // miniMenu.style.display = "block";
  miniMenu.classList.toggle("toggle-active");
});
