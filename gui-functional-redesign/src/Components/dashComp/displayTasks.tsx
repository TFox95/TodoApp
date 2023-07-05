import * as React from "react";
import TaskCard from "./taskCard";


const taskArray = (taskArray = Array()): React.ReactNode => {

    if (taskArray.length)
        return taskArray.map((index) => {
            return (
                <TaskCard
                    title={index.title}
                    description={index.desc}
                    key={index.title}
                />
            );
        }
        );
    if (!taskArray.length)
        return <TaskCard
            title={"Demo Task"}
            description={"This is a demo task to give you an example of what you would be seeing"}
            key={"Demo Task"}
        />;
};

export default taskArray;