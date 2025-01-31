document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Initially hide the header 
    header.style.opacity = "0";
    header.style.transform = "translateY(-100%)";

    // Add an event listener for scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.style.opacity = "1";
            header.style.transform = "translateY(0)";
        } else {
            header.style.opacity = "0";
            header.style.transform = "translateY(-100)";
        }
    });
});

//slide right for sec1
function slideRight(){
    var reveals = document.querySelectorAll(".slide-right")
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideRight);

// Slide left for sec2
function slideLeft() {
    const reveals = document.querySelectorAll(".slide-left");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// Listen to scroll events for both slideRight and slideLeft
window.addEventListener("scroll", () => {
    slideRight();
    slideLeft();
});