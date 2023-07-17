import * as React from "react";
import { sidebarToggle } from "../../Utils/dashUtils";
import { sidebarInterface } from "../../lib/interfaces/dash/Interfaces";

import menuIco from "../../Assets/sidebar-nav icons/menu-2.svg";
import sunIco from "../../Assets/sidebar-nav icons/sun-high.svg";
import starsIco from "../../Assets/sidebar-nav icons/stars-filled.svg";
import checkboxIco from "../../Assets/sidebar-nav icons/checkbox.svg";
import alertTriangleIco from "../../Assets/sidebar-nav icons/alert-triangle.svg"


const Sidebar = (props: sidebarInterface): React.ReactNode => {

  const specificSide = props.position;

  const handleClick = (option: string) => {
    console.log(option)
  };

  if (specificSide.toLowerCase() === String("left"))
    return (
      <section className="sidenav" id="mySidenav">
        <a className="menubtn nav-bg-hover-btn" onClick={sidebarToggle}>
          <img src={menuIco} alt="uh oh time to go" />
          Menu
        </a>
        <a className="nav-bg-hover-btn" href="#" onClick={() => handleClick("myday")}>
          <img src={sunIco} alt="uh oh time to go" />
          My Day
        </a>
        <a className="nav-bg-hover-btn" href="#" onClick={() => handleClick("important")}>
          <img src={starsIco} alt="uh oh time to go" />
          Important
        </a>
        <a className="nav-bg-hover-btn" href="#" onClick={() => handleClick("completed")}>
          <img src={checkboxIco} alt="uh oh time to go" />
          Completed
        </a>
        <a className="nav-bg-hover-btn" href="#" onClick={() => handleClick("overdue")}>
          <img src={alertTriangleIco} alt="uh oh time to go" />
          OverDue
        </a>
      </section>
    );

  if (specificSide.toLowerCase() === String("right"))
    return <>
      <div className="sort-container">
        <section className="sort-section">
          <div className="sort-by">

            <label className="sort-item"><input type="radio" name="sort-item" value="importance" />Importance</label>
          </div>

          <div className="sort-by">
            <label className="sort-item"><input type="radio" name="sort-item" value="due-date" />Due Date</label>
          </div>

          <div className="sort-by">
            <label className="sort-item"><input type="radio" name="sort-item" value="completed" />Completed</label>
          </div>

          <div className="sort-by">
            <label className="sort-item"><input type="radio" name="sort-item" value="date-created" />Date Created</label>
          </div>
        </section>
      </div>
    </>
};

export default Sidebar;
