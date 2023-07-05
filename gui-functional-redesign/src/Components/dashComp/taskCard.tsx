import * as React from "react";
import { NavLink } from "react-router-dom";

const TaskCard = (props: any): React.ReactNode => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <NavLink to="#">View Details</NavLink>
    </div>
  );
};

export default TaskCard;
