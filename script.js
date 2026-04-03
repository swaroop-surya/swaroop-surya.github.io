// SMOOTH SCROLL (Lenis)
const lenis = new Lenis({
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// TEXT SETUP
const word = ".SWAROOP";
const container = document.getElementById("text");

let letters = [];

word.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.innerText = char;
  span.classList.add("letter");

  container.appendChild(span);
  letters.push(span);
});


// INITIAL RANDOM POSITIONS
letters.forEach((letter) => {
  gsap.set(letter, {
    x: gsap.utils.random(-500, 500),
    y: gsap.utils.random(-400, -800),
    rotation: gsap.utils.random(-180, 180),
    opacity: 0,
    filter: "blur(10px)"
  });
});


// FINAL FALL + ALIGN (STAYS THERE)
gsap.to(letters, {
  x: (i) => i * 90,
  y: 0,
  rotation: 0,
  opacity: 1,
  filter: "blur(0px)",
  duration: 1.5,
  ease: "power4.out",
  stagger: 0.08
});

// STATEMENT ANIMATION
gsap.to(".statement h1", {
  scrollTrigger: {
    trigger: ".statement",
    start: "top 70%",
  },
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "power3.out"
});


// IMAGE REVEAL
gsap.utils.toArray(".img-box img").forEach((img) => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
    },
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out"
  });
});


// ENDING FADE
gsap.to(".ending h1", {
  scrollTrigger: {
    trigger: ".ending",
    start: "top 70%",
  },
  opacity: 1,
  duration: 1.5
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.6) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector(".menu-btn");
  const overlay = document.querySelector(".menu-overlay");
  const menuItems = document.querySelectorAll(".menu-content a");
  const menuLinks = document.querySelectorAll(".menu-content a");

  if (!menuBtn || !overlay) return;

  // TOGGLE MENU
  menuBtn.addEventListener("click", () => {
    overlay.classList.toggle("active");

    if (overlay.classList.contains("active")) {
      navbar.classList.add("hidden");

gsap.fromTo(menuItems,
  {
    y: 80,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out"
  }
);

    } else {
      navbar.classList.remove("hidden");
    }
  });

  // CLOSE MENU ON LINK CLICK
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      overlay.classList.remove("active");
      navbar.classList.remove("hidden");

      gsap.set(menuItems, {
        y: 100,
        opacity: 0
      });
    });
  });

});
const heroText = document.querySelector(".text");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    heroText.style.opacity = "0";
  } else {
    heroText.style.opacity = "1";
  }
});

const seeMoreBtn = document.querySelector(".see-more");
const projects = document.querySelector(".projects");

seeMoreBtn.addEventListener("click", () => {
  projects.classList.toggle("active");
});