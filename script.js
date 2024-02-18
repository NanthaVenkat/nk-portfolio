// toggle bar 
const togglebutton = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("nav-links")[0];
const overlay = document.querySelector(".overlay");
const cursor = document.querySelector(".cursor");

// link scroll
document.addEventListener("DOMContentLoaded", function() {

    // Links
    const Profile = document.querySelector(".prolink");
    const experience = document.querySelector(".explink");
    const education = document.querySelector(".edulink");
    const skills = document.querySelector(".skillink");
    const contact = document.querySelector(".contlink");

    Profile.addEventListener('click', (e) => {
        e.preventDefault();

        const profSec = document.getElementById("profile");
        profSec.scrollIntoView({behavior: "smooth"});
    });

    experience.addEventListener('click', (e) => {
        e.preventDefault();

        const expSec = document.getElementById("experience");
        expSec.scrollIntoView({behavior: "smooth"});
    });

    education.addEventListener('click', (e) => {
        e.preventDefault();

        const eduSec = document.getElementById("education");
        eduSec.scrollIntoView({behavior: "smooth"});
    });

    skills.addEventListener('click', (e) => {
        e.preventDefault();

        const skillSec = document.getElementById("skill");
        skillSec.scrollIntoView({behavior: "smooth"});
    });

    contact.addEventListener('click', (e) => {
        e.preventDefault();

        const contSec = document.getElementById("contact");
        contSec.scrollIntoView({behavior: "smooth"});
    });
});


// custom cursor
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top:" + (e.pageY) + "px; left:" + (e.pageX) + "px;")
});

// overlay
togglebutton.addEventListener( "click", ()=> {
    navbarlinks.classList.toggle('active');
    overlay.classList.toggle('active');
} );

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    navbarlinks.classList.remove("active");
});

// navbar scrolli action

const navbar = document.querySelector(".navbar");
const navLink = document.querySelector(".nav-links");
const toggleButton = document.querySelector(".toggle-button")

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    if (scrollPos > 0 && scrollPos < (documentHeight - windowHeight)) {
        if (scrollPos < lastScrollTop) {
            navbar.style.top = '0';
        } else {
            navbar.style.top = '-90px';
        }
        lastScrollTop = scrollPos <= 0 ? 0 : scrollPos;
    } else if (scrollPos >= (documentHeight - windowHeight)) {
        navbar.style.top = '0';
    }

    if (scrollPos > 0) {
        navbar.classList.add("scroll");
        navLink.classList.add("scroll");
        toggleButton.classList.add("scroll");
    } else {
        navbar.style.backgroundColor = "##8666f3";
        navbar.classList.remove("scroll");
        navLink.classList.remove("scroll");
        toggleButton.classList.remove("scroll");
    }
});

function cvDownload() {
    const pdfPath = 'ResumePdf/resume.pdf';

    const anchor = document.createElement('a');

    anchor.href = pdfPath;

    anchor.download = 'NanthaCv.pdf';

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
}