// variables here
const smartMenu = document.querySelector("#smart-menu");
const smartMenuLinks = document.querySelector(".nav-flex-end");
const LearnNowScroll = document.querySelector(".hero-btn button");
const scrollHere = document.querySelector("body")

// functions below
smartMenu.addEventListener("click", () => {
    smartMenu.classList.toggle("is-active")
    smartMenuLinks.classList.toggle("active")
})

if (LearnNowScroll) {
    LearnNowScroll.addEventListener("click", () => {
        document.querySelector(".main").scrollIntoView({
            behavior: "smooth"
        })
    })
}


scrollHere.addEventListener("scroll", () => {
    scrollHere.style.setProperty("overflow", "visible")
})