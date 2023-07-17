const updateDate: () => void = () => {
  const dateElem = document.getElementById("date")!;
  const currentDate = new Date();
  dateElem.innerHTML = currentDate.toDateString()!;
  setTimeout(updateDate, 30000);
};

const sidebarToggle: () => void = () => {
  const sideNav = document.getElementById("mySidenav")! as HTMLElement;

  switch (sideNav.style.width) {
    case "230px":
      sideNav.style.width = "65px";
      break;

    case "65px":
    default:
      sideNav.style.width = "230px";
      break;
  }
};

const sortToggle: () => void = () => {
  const altNav = document.querySelector(".sort-container")! as HTMLElement;
  const altNavdisplayed = document.querySelector(
    ".sort-section"
  )! as HTMLElement;

  switch (altNav.style.width) {
    case "230px":
      altNavdisplayed.style.opacity = "0";
      console.log("okay");
      altNav.style.width = "0px";
      break;

    case "0px":
    default:
      altNavdisplayed.style.opacity = "1";
      console.log("huh?");
      altNav.style.width = "230px";
      break;
  }
};

const hideFooter: () => void = () => {
  window.addEventListener("load", () => {
    const footer = document.querySelector(".footer") as HTMLElement;
    if (footer) {
      footer.style.display = "none";
    }
  });
};

const handleFilter = (option: string, tasks: any[]) => {
  // Perform sorting logic based on the option
  // Update the tasks state with the sorted array
  // You can customize the sorting logic as per your requirements
  let filteredTasks: any[] = [];
  console.log(tasks);

  switch (option) {
    default:
    case "myday":
      filteredTasks = tasks;
      break;
    case "important":
      filteredTasks = [...tasks].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
    case "completed":
      filteredTasks = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "overdue":
      filteredTasks = [...tasks].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
  }

  return filteredTasks;
};

export { updateDate, sidebarToggle, hideFooter, sortToggle, handleFilter };
