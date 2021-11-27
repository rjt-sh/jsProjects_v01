"use strict";

// extracting elements
const display = document.querySelector(".display");
const btn = document.querySelector(".btn");
const colorTxt = document.querySelector(".color-txt");

// generating a random Hex Code
const charList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexGen = () => {
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    let charRandom = charList[Math.floor(Math.random() * charList.length)];
    colorCode += charRandom;
  }
  return colorCode;
};

// adding event listener
btn.addEventListener("click", () => {
  let newColor = hexGen();
  display.style.backgroundColor = newColor;
  colorTxt.textContent = newColor;
});
