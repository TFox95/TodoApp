import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Dashboard = ({ isAuthenticated }) => {

    if (isAuthenticated !== true)
        return <Navigate exact to='/' />

    return (
        <div>
            Dashboard
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,)(Dashboard);