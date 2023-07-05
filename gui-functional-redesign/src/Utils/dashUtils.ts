
const updateDate = () => {
  const dateElem = document.getElementById("date")!;
  const currentDate = new Date();
  dateElem.innerHTML = currentDate.toDateString()!;
  setTimeout(updateDate, 30000);
};

const sidebarToggle = () => {
  const sideNav = document.getElementById("mySidenav")! as HTMLElement;

  switch (sideNav.style.width) {

    case ("230px"):
      sideNav.style.width = "65px";
      break;

    case ("65px"):
    default:
      sideNav.style.width = "230px";
      break;
  };
};


const sortToggle = () => {
  const altNav = document.querySelector(".sort-container")! as HTMLElement;
  const altNavdisplayed = document.querySelector(".sort-section")! as HTMLElement;

  switch (altNav.style.width) {

    case ("230px"):
      altNavdisplayed.style.opacity = "0";
      console.log("okay");
      altNav.style.width = "0px";
      break;

    case ("0px"):
    default:
      altNavdisplayed.style.opacity = "1";
      console.log("huh?");
      altNav.style.width = "230px";
      break;
  };
};

const hideFooter = () => {
  window.addEventListener("load", () => {
    const footer = document.querySelector(".footer") as HTMLElement;
    if (footer) {
      footer.style.display = "none";
    }
  })
};

export {
  updateDate,
  sidebarToggle,
  hideFooter,
  sortToggle,
}