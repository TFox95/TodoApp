import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Dashboard = ({ isAuthenticated }) => {

    if (isAuthenticated !== true)
        return <Navigate exact to='/' />

    return (
        <div>
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
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,)(Dashboard);