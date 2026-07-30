//================ HERO SLIDER ================

const heroSlides = document.querySelectorAll(".hero-slide");

let currentHero = 0;

function showHeroSlide(){

    heroSlides.forEach(slide=>{

        slide.classList.remove("active");

    });

    heroSlides[currentHero].classList.add("active");

    currentHero++;

    if(currentHero >= heroSlides.length){

        currentHero = 0;

    }

}

setInterval(showHeroSlide,5000);

//================ HEADER SCROLL =================

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
});

mobileMenu.addEventListener("click", function(e){

    if(
        e.target !== mobileMenu &&
        e.target !== hamburger &&
        !hamburger.contains(e.target) &&
        !mobileMenu.contains(e.target)
    ){

        mobileMenu.classList.add("active");

    }

});
// ===============================
// Testimonial Slider
// ===============================

const slides = document.querySelectorAll(".testimonial-card");



let current = 0;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active-slide");

    });

    slides[index].classList.add("active-slide");

}



    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);



    current--;

    if(current < 0){

        current = slides.length - 1;

    }

    showSlide(current);


// Auto Slide //

setInterval(()=>{

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

},5000);

// ===============================
// Booking Form Validation
// ===============================

const bookingForm = document.getElementById("bookingForm");

("submit", function(e){

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const date = document.getElementById("date").value;

    const eventType = document.getElementById("eventType").value;

    if(fullname === "" ||
       email === "" ||
       phone === "" ||
       date === "" ||
       eventType === ""){

        alert("Please complete all required fields.");

        return;

    }

    alert("Thank you! Your booking request has been submitted.");

    bookingForm.reset();

});


// ===============================
// Back To Top
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================
// PRELOADER
// ===================

window.addEventListener("scroll",()=>{

    let scroll=

    document.documentElement.scrollTop;

    let height=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    let progress=(scroll/height)*100;

    document.getElementById("progress-bar").style.width=progress+"%";

});

// ===============================
// Lightbox Gallery
// ===============================

const galleryImages = document.querySelectorAll(".gallery- img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".lightbox-close");

const prevBtn = document.querySelector(".lightbox-prev");

const nextBtn = document.querySelector(".lightbox-next");

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((image, index)=>{

    image.addEventListener("click",()=>{

        currentIndex = index;

        showImage();

        lightbox.classList.add("active");

    });

});

// Show Image
function showImage(){

    lightboxImage.src = galleryImages[currentIndex].src;

}

// Close
closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

// Next
nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

});

// Previous
prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

// Close when clicking outside the image
lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});


/*=============================
   SERVICE CARD ANIMATION
=============================*/

const serviceCards = document.querySelectorAll(".ws-service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.4s";

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


/*=============================
   gallery extention
=============================*/

const buttons=document.querySelectorAll(".filter-buttons button");

const cards=document.querySelectorAll(".gallery-item");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.getAttribute("data-filter");

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else{

if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

}

});

});

});

const galleryLinks = document.querySelectorAll(".gallery-item a");

galleryLinks.forEach(link => {
    link.addEventListener("click", function () {
        this.style.opacity = "0.8";
    });
});


cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// Counter Animation

const counters = document.querySelectorAll(".counter h2");

const speed = 100;

counters.forEach(counter => {

const animate = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(animate,20);

}else{

counter.innerText = target;

}

};

animate();

});


// Scroll Animation

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll",()=>{

boxes.forEach(box=>{

const top=box.getBoundingClientRect().top;

if(top<window.innerHeight-100){

box.style.opacity="1";

box.style.transform="translateY(0)";

}

});

});

// Counter Animation

const counter = document.querySelectorAll(".counter h2");

const speeds = 100;

counters.forEach(counter => {

const animate = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(animate,20);

}else{

counter.innerText = target;

}

};

animate();

});


// Scroll Animation

const boxe = document.querySelectorAll(".box");

window.addEventListener("scroll",()=>{

boxes.forEach(box=>{

const top=box.getBoundingClientRect().top;

if(top<window.innerHeight-100){

box.style.opacity="1";

box.style.transform="translateY(0)";

}

});

});

// ================= SCROLL ANIMATION =================

const fadeElements = document.querySelectorAll(".fade-up");

function revealElements(){

    fadeElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);
mobileMenu.addEventListener("scroll", revealElements);
mobileMenu.addEventListener("load", revealElements);


//================ PACKAGE SELECTION ================

const packageButtons =
document.querySelectorAll(".booking-package-btn");

const selectedPackage =
document.getElementById("selectedPackage");

const selectedPrice =
document.getElementById("selectedPrice");

packageButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        selectedPackage.value =
        button.dataset.package;

        selectedPrice.value =
        button.dataset.price;

        document
        .querySelector(".booking-section")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Set your event date here
const eventDate = new Date("December 31, 2026 23:59:59").getTime();

const timer = setInterval(function(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    if(distance < 0){

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML =
        "<h2>🎉 The Event Has Started!</h2>";

    }

},1000); 