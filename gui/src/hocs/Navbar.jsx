import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

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
        // eslint-disable-next-line
    const authLinks = (
        <Fragment>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" >Dashboard</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/create" >Create Todo</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Account" >Account</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#!" >Logout</NavLink>
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
                        {anonLinks}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;