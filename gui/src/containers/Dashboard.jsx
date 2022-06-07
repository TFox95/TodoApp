import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { RetrieveTask } from "../actions/tasks/RetrieveTask";

const Dashboard = ({ isAuthenticated, token }) => {

    if (isAuthenticated !== true)
        return <Navigate exact to='/' />

    ;

    const dynamicTasksList = () => {
        const listOfTasks = []
        const taskPromise = RetrieveTask(token)

        const taskLastPromise = Promise.resolve(taskPromise).then(index => {
            for (let i in index) {
                listOfTasks.push(index[i])
            };

            listOfTasks.map((i) => {
                console.log('huehuehue',i)
            })

            

        });
        return taskLastPromise
    }
    const hitter = dynamicTasksList()

    return (
        <div className="container">
            <div className="card text-left wd-5">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps,)(Dashboard);