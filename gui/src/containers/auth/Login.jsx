import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { loginAPI } from "../../actions/authActions";
import CSRFToken from "../../actions/csrftoken";



const Login = ({loginAPI}) => {

    return (
        <div className="container">
            <section className="rounded shadow mx-auto mt-5 p-5 bg-light">
                <h2>Login</h2>
                <p className="lead">Sign into your Asterisks Account.</p>
                <hr className="my-3" />
                <form>
                    <CSRFToken />
                    <div className="mb-3">
                        <label id="username" className="form-label" >Username</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label id="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p className="mt-3">
                    Don't have an Account? <NavLink to="/register">Click Here</NavLink>
                </p>
            </section>
        </div>
    );
};

export default Login;