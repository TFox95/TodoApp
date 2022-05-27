import React from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Home = (isAuthenticated) => {
    
    if (isAuthenticated)
        return <Navigate to="/Dashboard"/>
    return (
        <div className="container">
            <section className="rounded shadow mx-auto mt-5 p-5 bg-light">
                <h1>Welcome to *Asterisks*</h1>
                <p className="lead">
                    This is a S.P.A; with Django(Python) REST as the backend and React(JSX) as the frontend
                </p>
                <hr className="my-4" />
                <p>Click the button below to log in</p>
                <Link className="btn btn-primary btn-lrg" to="/login">Login</Link>
            </section>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);