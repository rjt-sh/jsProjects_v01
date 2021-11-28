"use strict";

// extract elements
const numDisplay = document.querySelector(".number");
const subBtn = document.querySelector(".btn-sub");
const resetBtn = document.querySelector(".btn-reset");
const addBtn = document.querySelector(".btn-add");

//adding event listeners
subBtn.addEventListener("click", () => {
  numDisplay.textContent = Number(numDisplay.textContent) - 1;
  if (numDisplay.textContent < 0) {
    numDisplay.style.color = "red";
  } else if (numDisplay.textContent == 0) {
    numDisplay.style.color = "black";
  }
});

addBtn.addEventListener("click", () => {
  numDisplay.textContent = Number(numDisplay.textContent) + 1;
  if (numDisplay.textContent > 0) {
    numDisplay.style.color = "green";
  } else if (numDisplay.textContent == 0) {
    numDisplay.style.color = "black";
  }
});

resetBtn.addEventListener("click", () => {
  numDisplay.textContent = 0;
  numDisplay.style.color = "black";
});
