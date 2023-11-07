gsap.to(
    ".preloader",
    { y: "-100%", duration: 1, delay: 4 }
);

gsap.to(
    ".hero",
    { y: "0%", duration: 1 }, "-=1"
);

gsap.fromTo(
    ".header",
    { height: 0, top: -40 },
    {
        height: 75,
        top: 0,
        duration: 1,
        delay: 4.5,
        scrollTrigger: {
            trigger: ".header",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        onComplete: () => {
            // Remove the header-animation class
            document.querySelector(".header").style = "";
        }
    }
);

// gsap.to(".header", {
//     opacity: 1,
//     duration: 3,
//     delay: 5,
//     // scrollTrigger: {
//     //     trigger: ".header",
//     //     start: "top bottom",
//     //     end: "bottom top",
//     //     scrub: true
//     // }
// });


gsap.fromTo(
    ".logo-name",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
    }
);

'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        header.classList.toggle("nav-active");
        navToggleBtn.classList.toggle("active");
    });
}



/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (window.scrollY >= 100) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }

});