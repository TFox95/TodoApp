// variables here
const smartMenu = document.querySelector("#smart-menu");
const smartMenuLinks = document.querySelector(".nav-flex-end");
const LearnNowScroll = document.querySelector(".hero-btn button");
const scrollHere = document.querySelector("body");
let prevScrollpos = window.pageYOffset;


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

// if conditionals below

if (LearnNowScroll) {
    LearnNowScroll.addEventListener("click", () => {
        document.querySelector(".main").scrollIntoView({
            behavior: "smooth"
        })
    })
}