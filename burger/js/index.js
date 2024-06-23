"use strick";

// const btnBurger = document.querySelector(".burgerMenuBtn");
// const menuContainer = document.querySelector(".burgerMenuContainer");

// btnBurger.onclick = () => {
//   menuContainer.classList.replace(
//     "burgerMenuContainerHide",
//     "burgerMenuContainerActive"
//   );
// };

const burgerContainer = document.querySelector(".burgerMenuContainer");
const fullScreen = document.querySelector(".fullScreenOverlay");

burgerContainer.addEventListener("click", burgerSee);
fullScreen.addEventListener("click", burgerSee);

function burgerSee(e) {
  burgerContainer.classList.toggle("burgerMenuContainerActive");
  fullScreen.classList.toggle("burgerMenuContainerActive");
}
