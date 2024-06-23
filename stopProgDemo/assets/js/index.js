"use strict";

const heartBtn = document.querySelector("button");

heartBtn.addEventListener("click", heartClickHandler);

function heartClickHandler() {
  this.classList.toggle("redHeart");
  e.stopPropagation();
}

const articleEl = document.querySelector("article");

articleEl.addEventListener("click", backgroundHendler);
function backgroundHendler() {
  this.classList.toggle("background");
}
