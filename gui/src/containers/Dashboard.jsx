import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RetrieveTask } from "../actions/tasks/retrieveTask";

const Dashboard = ({ RetrieveTask, isAuthenticated, token }) => {
    const tasks = useSelector(state => state.task)

    if (!isAuthenticated)
        return <Navigate exact to='/' />;    

    console.log(tasks)

    return (
        <div className="container">
            <div className="card text-left wd-5">
                <div className="card-header">
                    <h5>Featured</h5>
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

export default connect(mapStateToProps, { RetrieveTask })(Dashboard);