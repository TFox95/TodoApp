import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const anonLinks = (
        <Fragment>
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

    return (
        <div className="container-fullwidth">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/">Fox Notes</NavLink>
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