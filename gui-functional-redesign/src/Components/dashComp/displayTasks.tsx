import * as React from "react";
import TaskCard from "./taskCard";



const taskArray = (taskArray = Array()): React.ReactNode => {
    
    const [tasks, setTasks] = React.useState(taskArray)
    console.log(tasks, setTasks)

    if (taskArray.length)
        return taskArray.map((index) => {
            return (
                <TaskCard
                    key={index.title}
                    title={index.title}
                    description={index.desc}
                    route="#"
                />
            );
        }
        );
    if (!taskArray.length)
        return <TaskCard
            key={"Demo Task"}
            title={"Demo Task"}
            description={"This is a demo task to give you an example of what you would be seeing"}
            route={"#"}
        />;
};

export default taskArray;