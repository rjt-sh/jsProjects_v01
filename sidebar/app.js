"use strict";

// extract all buttons
const sideBtn = document.querySelector(".sidebar-btn");
const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".side");
const navIcon = document.querySelector(".nav-icon");

// on page-load
window.addEventListener("load", () => {
  sidebar.classList.add("sidebar-inv");
});

// on nav-Btn
navBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-inv");
});

// on side-Btn
sideBtn.addEventListener("click", () => {
  sidebar.classList.add("sidebar-inv");
});
