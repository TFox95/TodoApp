import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { RetrieveTask } from "../actions/tasks/retrieveTask";

const Dashboard = ({ RetrieveTask, isAuthenticated, token }) => {

    let listofTasks, EmptyTaskList;

    const checkforTasks = useSelector((state) => {
        if (!state.task) {
            return null;
        } else if (state.task) {
            const storedData = [state.task.tasks];
            return storedData;
        } else {
            return null;
        };
    });

    const demoTask =
        <div className="container">
            <div className="card text-left wd-5">
                <div className="card-header">
                    <h5 className="text-muted">Example Task</h5>
                </div>
                <div className="card-body">
                    <h6 className="card-title">Description: 
                    <p className="text-muted">Monitor Processor at high load for 45 minutes</p>
                    </h6>
                    <h6 className="card-title">Due Date: 
                    <p></p>
                    </h6>
                    <h6 className="card-title">Priority</h6>
                    <h6 className="card-title">Category</h6>
                    <h6 className="card-title">Completed:</h6>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <NavLink className="btn btn-primary" to="/Create">Create Task Here</NavLink>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>;


    if (!checkforTasks[0]) {
        EmptyTaskList = true;
    } else {
        console.log('wait hold on', checkforTasks);
        listofTasks = checkforTasks[0].map((index) => {
            return (
                <div className="container">
                    <main className="card text-left wd-5">
                        <span className="card-header">
                            <h5>Task</h5>
                        </span>
                        <section className="card-body">
                            <h5 className="card-title">{index.title}</h5>
                            <p className="card-text">{index.description}</p>
                            <p className="card-text"></p>
                            <p className="card-text"></p>
                            <p className="card-text"></p>
                            <p className="card-text"></p>
                            <p className="card-text"></p>
                            <p className="card-text"></p>
                        </section>
                    </main>
                </div>
            )
        })
    }

    console.log(EmptyTaskList)

    if (!isAuthenticated)
        return <Navigate exact to='/' />;

    return (
        <div>
            {!EmptyTaskList ? listofTasks : demoTask}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps, { RetrieveTask })(Dashboard);