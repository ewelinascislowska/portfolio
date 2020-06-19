const aside = document.querySelector('aside');
const hamburger = document.querySelector('div.hamburger');

hamburger.addEventListener("click", function () {
    aside.classList.toggle("on");
})


let header = document.querySelector('header');
let about = document.querySelector('.about');
let skills = document.querySelector('.skills');
let projects = document.querySelector('.projects');
let footer = document.querySelector('footer');
let buttonProjects = document.querySelector('button');

let headerArray = document.querySelectorAll(".l1");
let aboutArray = document.querySelectorAll(".l2");
let skillsArray = document.querySelectorAll(".l3");
let projectsArray = document.querySelectorAll(".l4");
let footerArray = document.querySelectorAll(".l5");

buttonProjects.addEventListener("click", function () {
    window.scroll({
        top: (projects.offsetTop - 60),
        behavior: 'smooth'
    });
})

headerArray.forEach(function (l1) {
    l1.addEventListener("click", function () {
        window.scroll({
            top: (header.offsetTop - 60),
            behavior: 'smooth'
        });
    });
});
aboutArray.forEach(function (l2) {
    l2.addEventListener("click", function () {
        window.scroll({
            top: (about.offsetTop - 60),
            behavior: 'smooth'
        });
    });
});
skillsArray.forEach(function (l3) {
    l3.addEventListener("click", function () {
        window.scroll({
            top: (skills.offsetTop - 60),
            behavior: 'smooth'
        });
    });
});
projectsArray.forEach(function (l4) {
    l4.addEventListener("click", function () {
        window.scroll({
            top: (projects.offsetTop - 60),
            behavior: 'smooth'
        });
    });
});
footerArray.forEach(function (l5) {
    l5.addEventListener("click", function () {
        window.scroll({
            top: (footer.offsetTop - 60),
            behavior: 'smooth'
        });
    });
});