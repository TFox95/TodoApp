import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { RetrieveTask } from "../actions/tasks/RetrieveTask";

const Dashboard = ({ isAuthenticated, token }) => {

    if (isAuthenticated !== true)
        return <Navigate exact to='/' />

    let capture = RetrieveTask(token);

    const listing = () => {

        let data = []

        let myPromise = Promise.resolve(capture).then(capture => {
            for (let i in capture) {
                data.push(capture[i]);
            }

        })
        data.map((index) => {
            console.log(index.user)
        })


        return data
    }

    console.log(listing())

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