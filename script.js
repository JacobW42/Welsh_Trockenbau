window.addEventListener("load", () => {
gsap.registerPlugin(ScrollTrigger);

/* HERO */

gsap.from(".logo",{
    y:-30,
    opacity:0,
    duration:1,
    ease:"power3.out"
});

gsap.fromTo(
    "nav a",
    {
        y:-20,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        duration:1,
        stagger:0.1,
        delay:0.2,
        ease:"power3.out"
    }
);

gsap.from(".hero-tag",{
    y:40,
    opacity:0,
    duration:1,
    delay:0.4,
    ease:"power3.out"
});

gsap.from(".hero h1",{
    y:60,
    opacity:0,
    duration:1.2,
    delay:0.6,
    ease:"power4.out"
});

gsap.from(".hero-text",{
    y:40,
    opacity:0,
    duration:1,
    delay:0.9,
    ease:"power3.out"
});

gsap.fromTo(
    ".hero-buttons a",
    {
        y:30,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        duration:1,
        stagger:0.15,
        delay:1.1,
        ease:"power3.out"
    }
);

gsap.from(".hero",{
    scale:1.05,
    duration:2,
    ease:"power2.out"
});

/* SERVICES */

gsap.fromTo(
    ".section-header",
    {
        y:50,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".services",
            start:"top 85%"
        },

        y:0,
        opacity:1,
        duration:1,
        ease:"power3.out"
    }
);

gsap.fromTo(
    ".service-card",
    {
        y:80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".service-grid",
            start:"top 85%"
        },

        y:0,
        opacity:1,
        duration:1,
        stagger:0.2,
        ease:"power4.out"
    }
);

/* CTA */

gsap.fromTo(
    ".cta h2",
    {
        y:50,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".cta",
            start:"top 85%"
        },

        y:0,
        opacity:1,
        duration:1,
        ease:"power3.out"
    }
);

gsap.fromTo(
    ".cta p",
    {
        y:30,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".cta",
            start:"top 85%"
        },

        y:0,
        opacity:1,
        duration:1,
        delay:0.2,
        ease:"power3.out"
    }
);

gsap.fromTo(
    ".cta .btn-primary",
    {
        scale:0.8,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".cta",
            start:"top 85%"
        },

        scale:1,
        opacity:1,
        duration:1,
        delay:0.4,
        ease:"back.out(1.7)"
    }
);

/* CARD HOVER */

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card,{
            scale:1.03,
            y:-10,
            duration:0.3
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card,{
            scale:1,
            y:0,
            duration:0.3
        });

    });

});
/* CONTACT SECTION */

gsap.fromTo(
    ".contact-form",
    {
        x:-80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".contact-section",
            start:"top 75%"
        },

        x:0,
        opacity:1,
        duration:1.2,
        ease:"power4.out"
    }
);

gsap.fromTo(
    ".contact-card",
    {
        x:80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".contact-direct",
            start:"top 75%"
        },

        x:0,
        opacity:1,
        duration:1,
        stagger:0.2,
        ease:"power4.out"
    }
);

gsap.fromTo(
    ".thank-you",
    {
        y:60,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".thank-you",
            start:"top 85%"
        },

        y:0,
        opacity:1,
        duration:1,
        ease:"power3.out"
    }
);
});

// Thank you message
const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you-message');
const formWrapper = document.getElementById('form-wrapper');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form action

  // Use AJAX to submit form to Formspree
  const data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        gsap.to(formWrapper,{
            opacity:0,
            y:-30,
            duration:0.5,
            ease:"power2.out",
            onComplete: () => {

                formWrapper.style.display = 'none';

                thankYou.classList.remove('hidden');

                gsap.fromTo(
                    thankYou,
                    {
                        opacity:0,
                        y:40
                    },
                    {
                        opacity:1,
                        y:0,
                        duration:1,
                        ease:"power3.out"
                    }
                );

            }
        });
      } else {
        alert("There was a problem submitting the form.");
      }
    })
    .catch(() => {
      alert("Something went wrong!");
    });
});

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

/* TOGGLE MENU */

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    if(nav.classList.contains("active")){

        gsap.fromTo(
            "nav a",
            {
                x:40,
                opacity:0
            },
            {
                x:0,
                opacity:1,
                stagger:0.1,
                duration:0.5,
                ease:"power3.out"
            }
        );

    }

});

/* CLOSE ON LINK CLICK */
const bookingButton = document.querySelector(".open-booking");

navLinks.forEach(link => {

    if(link.classList.contains("open-booking")) return;

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        nav.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});

/* CLOSE WHEN CLICKING OUTSIDE */

document.addEventListener("click", (e) => {

    const clickedInsideNav = nav.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if(
        nav.classList.contains("active") &&
        !clickedInsideNav &&
        !clickedHamburger
    ){

        hamburger.classList.remove("active");
        nav.classList.remove("active");
        document.body.classList.remove("menu-open");

    }

});

window.addEventListener("load", () => {

/* BOOKING PANEL */

const openBookingButtons = document.querySelectorAll(".open-booking");
const bookingPanel = document.querySelector(".booking-panel");
const bookingOverlay = document.querySelector(".booking-overlay");
const closeBooking = document.querySelector(".close-booking");

function closeBookingPanel(){

    bookingPanel.classList.remove("active");
    bookingOverlay.classList.remove("active");

    document.body.classList.remove("menu-open");

}

openBookingButtons.forEach(button => {

button.addEventListener("click", (e) => {

    e.preventDefault();

    bookingPanel.classList.add("active");
    bookingOverlay.classList.add("active");

    document.body.classList.add("menu-open");

});
});


closeBooking.addEventListener("click", closeBookingPanel);

bookingOverlay.addEventListener("click", closeBookingPanel);

});

// Booking CTA
gsap.fromTo(
    ".booking-cta-content",
    {
        y:80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".booking-cta",
            start:"top 80%"
        },

        y:0,
        opacity:1,
        duration:1.2,
        ease:"power4.out"
    }
);

/* ABOUT SECTION */

gsap.fromTo(
    ".about-left",
    {
        x:-80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".about",
            start:"top 75%"
        },

        x:0,
        opacity:1,
        duration:1.2,
        ease:"power4.out"
    }
);

gsap.fromTo(
    ".about-image",
    {
        y:80,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".about-gallery",
            start:"top 80%"
        },

        y:0,
        opacity:1,
        duration:1.2,
        stagger:0.2,
        ease:"power4.out"
    }
);

/* PROJECTS */

gsap.fromTo(
    ".project-card",
    {
        y:100,
        opacity:0
    },
    {
        scrollTrigger:{
            trigger:".projects",
            start:"top 75%"
        },

        y:0,
        opacity:1,
        duration:1.2,
        stagger:0.2,
        ease:"power4.out"
    }
);