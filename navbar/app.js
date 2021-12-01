"use strict";

// extracting toggle button
const button = document.querySelector(".btn");
const links = document.querySelector(".block-links");

// event listener
button.addEventListener("click", () => {
  console.log("burger menu was clicked");
  links.classList.toggle("toggle");
});

// setting default on page load
window.addEventListener("load", () => {
  links.classList.add("toggle");
});
