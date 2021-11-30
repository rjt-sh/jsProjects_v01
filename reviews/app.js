"use strict";

// daa for reviews
const info = [
  {
    image: "assets/pfp1.jpg",
    fullname: "John Smith",
    org: "Acme Enterprises",
    review:
      "Suspendisse convallis purus sit amet nisi molestie dapibus,Maecenas nec ligula vitae ligula pretium convallis.Pellentesque at enim non risus scelerisque tristique non porta ipsum et del toro mines, capri acuman iste iklem.",
  },
  {
    image: "assets/pfp2.jpg",
    fullname: "Jessica Clark",
    org: "Excel Corp",
    review:
      "Phasellus eu enim mauris. Nullam porttitor lectus sit amet magna tincidunt euismod. Integer aliquam ex at massa convallis imperdiet. Praesent suscipit interdum condimentum. Praesent malesuada, justo eu rutrum rutrum.",
  },
  {
    image: "assets/pfp3.jpg",
    fullname: "Melissa Chan",
    org: "Star Enterprises",
    review:
      "Maecenas felis mi, venenatis eu porttitor non, facilisis eget nulla. Praesent sit amet dignissim magna. Phasellus egestas risus vitae ligula condimentum facilisis. Morbi sed blandit dui. Maecenas sodales elit eget velit.",
  },
  {
    image: "assets/pfp4.jpg",
    fullname: "Patrick Porter",
    org: "Ultra Industries",
    review:
      "Sed pellentesque nunc a bibendum cursus. In mattis mi dictum, tempor dolor vel, lobortis enim. Nunc nec fermentum magna, ut scelerisque magna. Duis sollicitudin vitae dolor sit amet volutpat. Cras nibh risus.",
  },
];

// extracting useful elements
const pfpImage = document.querySelector(".pf-image");
const fullName = document.querySelector(".fullname");
const orgName = document.querySelector(".org");
const revText = document.querySelector(".review");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
let activeRev = 0;

// injecting content

leftBtn.addEventListener("click", () => {
  activeRev = activeRev - 1;
  if (activeRev < 0) {
    activeRev = 3;
  }
  pfpImage.src = info[activeRev].image;
  fullName.textContent = info[activeRev].fullname;
  orgName.textContent = info[activeRev].org;
  revText.textContent = info[activeRev].review;
});

rightBtn.addEventListener("click", () => {
  activeRev = activeRev + 1;
  if (activeRev > 3) {
    activeRev = 0;
  }
  pfpImage.src = info[activeRev].image;
  fullName.textContent = info[activeRev].fullname;
  orgName.textContent = info[activeRev].org;
  revText.textContent = info[activeRev].review;
});

// event listwener on page load
window.addEventListener("load", () => {
  pfpImage.src = info[activeRev].image;
  fullName.textContent = info[activeRev].fullname;
  orgName.textContent = info[activeRev].org;
  revText.textContent = info[activeRev].review;
});
