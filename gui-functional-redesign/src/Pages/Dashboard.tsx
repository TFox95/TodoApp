import * as React from "react";

import Sidebar from "../Components/dashComp/sidebar";
import SortDateOptions from "../Components/dashComp/sort";
import { hideFooter } from "../Utils/dashUtils";
import taskArray from "../Components/dashComp/displayTasks";

const Dashboard = (): React.ReactNode => {
  hideFooter();
  const tasks = new Array(
    {
      title: "Title 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Task 2",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Task 3",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Task 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nostrum incidunt perferendis eaque unde necessitatibus. Omnis atque facilis, exercitationem sequi hic, in non voluptatibus dolor sapiente quod nostrum ex debitis.",
    }
  );

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <Sidebar position={"Left"} />
        <div className="dashboard-content">
          <SortDateOptions />
          <div className="dashboard-content-block">{taskArray(tasks)}</div>
        </div>
        <Sidebar position={"Right"} />
      </div>
    </div>
  );
};

export default Dashboard;
