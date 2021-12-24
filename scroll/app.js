"use strict";

// exracting elements
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const upBtn = document.querySelector(".up-btn");
const year = document.querySelector(".year");

// adding current year
const currYear = new Date().getFullYear();
year.innerHTML = ` ${currYear}`;

// adding event listeners
window.addEventListener("load", () => {
  navbar.classList.add("nav-transparent");
  upBtn.classList.add("hide-btn");
});

window.addEventListener("scroll", () => {
  if (window.scrollY < 250) {
    navbar.classList.add("nav-transparent");
    navbar.classList.remove("nav-white");
    upBtn.classList.add("hide-btn");
  }
  if (window.scrollY >= 250) {
    navbar.classList.remove("nav-transparent");
    navbar.classList.add("nav-white");
    upBtn.classList.remove("hide-btn");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    console.log(position);
    window.scrollTo({ left: 0, top: position - navbar.clientHeight });
  });
});

upBtn.addEventListener("click", () => {
  window.scrollTo({ left: 0, top: 0 });
});
