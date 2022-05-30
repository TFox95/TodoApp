import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutAPI } from "../actions/auth/logoutaction";


const Navbar = ({ isAuthenticated, logoutAPI, token }) => {

    function handleLogout(e) {
        e.preventDefault();
        logoutAPI(token)
      }

    const anonLinks = (
        <Fragment>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" >Home</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
            </ul>
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Dashboard" >Dashboard</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Create" >Create Todo</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Account" >Account</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#!" onClick={handleLogout} >Logout</NavLink>
                </li>
            </ul>
        </Fragment>
    )

    return (
        <div className="container-fullwidth shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Asterisks</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {isAuthenticated ? authLinks : anonLinks}
                    </div>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps, { logoutAPI })(Navbar);