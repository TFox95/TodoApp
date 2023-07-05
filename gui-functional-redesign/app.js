// variables here
const smartMenu = document.querySelector("#smart-menu");
const smartMenuLinks = document.querySelector(".nav-flex-end");
const LearnNowScroll = document.querySelector(".hero-btn button");
const scrollHere = document.querySelector("body");
let prevScrollpos = window.pageYOffset;
const toggleNav = document.querySelector(".menubtn");
const toggleAltNav = document.getElementById("sort-option");


// functions below
smartMenu.addEventListener("click", () => {
    smartMenu.classList.toggle("is-active")
    smartMenuLinks.classList.toggle("active")
})

scrollHere.addEventListener("scroll", () => {
    scrollHere.style.setProperty("overflow", "visible")
})

const revealPassword = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.setProperty("top", "0")
    } else {
        document.querySelector(".navbar").style.setProperty("top", "-4rem")
    }
    prevScrollpos = currentScrollPos
}

const updateDate = () => {
    const dateElem = document.getElementById("date");
    const currentDate = new Date();
    dateElem.innerHTML = currentDate.toDateString();
    setTimeout(updateDate, 30000);
};

// if conditionals below

if (LearnNowScroll) {
    LearnNowScroll.addEventListener("click", () => {
        document.querySelector(".main").scrollIntoView({
            behavior: "smooth"
        })
    })
}

if (toggleNav) {

    toggleNav.addEventListener("click", () => {
        const sideNav = document.getElementById("mySidenav");
        if (sideNav.style.width === "230px") {
            return sideNav.style.width = "65px";
        }
        return sideNav.style.width = "230px";

    });

    window.addEventListener("load", () => {
        updateDate();
    })

    toggleAltNav.addEventListener("click", () => {
        const altNav = document.querySelector(".sort-container");
        const altNavdisplayed = document.querySelector(".sort-section")
        if (altNav.style.width === "230px") {
            altNavdisplayed.style.opacity = "0";
            return altNav.style.width = "0px";
        }
        altNavdisplayed.style.opacity = "1";
        return altNav.style.width = "230px";

    });
}
