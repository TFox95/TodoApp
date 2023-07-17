import * as React from "react";
import { NavLink } from "react-router-dom";
import { TaskCardInterface } from "../../lib/interfaces/dash/Interfaces";

const TaskCard = (props: TaskCardInterface): React.ReactNode => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <NavLink to={props.route}>View Details</NavLink>
    </div>
  );
};

export default TaskCard;
