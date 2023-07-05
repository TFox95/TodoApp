let prevScrollPos = window.scrollY;

const handleScroll: () => void = () => {
    const currentScrollPos = window.scrollY;
    const navbarElement = document.querySelector(".navbar")! as HTMLElement;


    if (prevScrollPos > currentScrollPos) {
        navbarElement.style.top = "0";
    } else {
        navbarElement.style.top = "-4rem";
    }

    prevScrollPos = currentScrollPos;
};

const handleSmartMenu = () => {
    const smartMenuElements = document.querySelector("#smart-menu");
    const smartMenuLinks = document.querySelector(".nav-flex-end");

    smartMenuElements!.classList.toggle("is-active")
    smartMenuLinks!.classList.toggle("active")

}


export {
    handleScroll,
    handleSmartMenu
}