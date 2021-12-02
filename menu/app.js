"use strict";

// extract relevant elements
const allBtn = document.querySelector(".all-btn");
const breakfastBtn = document.querySelector(".breakfast-btn");
const lunchBtn = document.querySelector(".lunch-btn");
const shakesBtn = document.querySelector(".shakes-btn");
const allItems = document.querySelectorAll(".menu-item");
const breakfastItems = document.querySelectorAll(".item-breakfast");
const lunchItems = document.querySelectorAll(".item-lunch");
const shakeItems = document.querySelectorAll(".item-shake");

// breakfast button
breakfastBtn.addEventListener("click", () => {
  lunchItems.forEach((item) => {
    item.classList.add("hide");
  });
  shakeItems.forEach((item) => {
    item.classList.add("hide");
  });
  breakfastItems.forEach((item) => {
    item.classList.remove("hide");
  });
});

//lunch button
lunchBtn.addEventListener("click", () => {
  breakfastItems.forEach((item) => {
    item.classList.add("hide");
  });
  shakeItems.forEach((item) => {
    item.classList.add("hide");
  });
  lunchItems.forEach((item) => {
    item.classList.remove("hide");
  });
});

//shakes button
shakesBtn.addEventListener("click", () => {
  breakfastItems.forEach((item) => {
    item.classList.add("hide");
  });
  lunchItems.forEach((item) => {
    item.classList.add("hide");
  });
  shakeItems.forEach((item) => {
    item.classList.remove("hide");
  });
});

// all button
allBtn.addEventListener("click", () => {
  allItems.forEach((item) => {
    item.classList.remove("hide");
  });
});
