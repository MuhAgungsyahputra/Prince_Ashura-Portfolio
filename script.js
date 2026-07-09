// ================================
// TYPING ANIMATION
// ================================

const typingText = [
    "Full Stack Developer",
    "UI/UX Designer",
    "AI Enthusiast",
    "Python Programmer",
    "Creative Thinker"
];

const title = document.querySelector(".hero-text h2");

let index = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = typingText[index];

    if (!deleting) {

        title.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        title.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            index++;

            if (index >= typingText.length)
                index = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ================================
// BUBBLE EFFECT
// ================================

function createBubble() {

    const bubble = document.createElement("span");

    bubble.className = "bubble";

    bubble.style.left = Math.random() * window.innerWidth + "px";

    const size = Math.random() * 25 + 8;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.body.appendChild(bubble);

    setTimeout(() => {

        bubble.remove();

    }, 10000);

}

setInterval(createBubble, 250);


// ================================
// SCROLL REVEAL
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("hidden");

    observer.observe(sec);

});


// ================================
// BUTTON EFFECT
// ================================

const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.08)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

});
// Glow saat hover pada skill

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "scale(1.02)";

        skill.style.transition = ".3s";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "scale(1)";

    });

});// Cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


// GSAP

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text", {

    opacity: 0,

    x: -150,

    duration: 1.5

});

gsap.from(".hero-image", {

    opacity: 0,

    x: 150,

    duration: 1.5

});

gsap.utils.toArray("section").forEach(sec => {

    gsap.from(sec, {

        scrollTrigger: sec,

        opacity: 0,

        y: 120,

        duration: 1.2

    });

});

AOS.init({

    duration: 1200,

    once: true

});