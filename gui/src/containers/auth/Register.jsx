import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { registerAPI } from "../../actions/authActions";

const Register = ({registerAPI}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        re_password: ''
    });
    const [accountCreated, setAccountCreated] = useState(false);

    const {username, password, re_password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            registerAPI(username, password, re_password);
            setAccountCreated(true)

        }
    };

    if (accountCreated)
        return <Navigate to='/'/>

    return (
        <div className="container mt-5">
            <section className="rounded shadow mx-auto mt-5 p-5 bg-light">
                <h2>Register</h2>
                <p className="lead">Create Your Asterisks account here!</p>
                <hr className="my-3" />
                <form>
                    
                    <div className="mb-3">
                        <label id="username" className="form-label" >Username</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label id="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label id="re_password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="re_password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default connect(null, {registerAPI})(Register);