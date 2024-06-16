"use strict";

const h1 = document.querySelector(".h1");
h1.onclick = () => h1.classList.toggle("h1");

const task1El = document.querySelector("#task1");

task1El.addEventListener("click", doneTaskHandler);

function doneTaskHandler(e) {
  console.dir(this);
  // this.style.textDecoration = "line-through";
  // this.className = "doneTask";
  this.classList.toggle("doneTask");
  this.classList.replace("redTask", "greenTask");
}
