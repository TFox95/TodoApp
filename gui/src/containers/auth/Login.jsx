import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import loginAPI from "../../actions/auth/loginaction";
import CSRFToken from "../../actions/csrftoken";
import { RetrieveTask } from "../../actions/tasks/retrieveTask";



const Login = ({ RetrieveTask, loginAPI, token, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (username && password) {
            loginAPI(username, password);

        }
    };

    if (isAuthenticated) {
        RetrieveTask(token);
        console.log('success');
        return <Navigate to='/Dashboard' />;
    }


    return (
        <div className="container">
            <section className="rounded shadow mx-auto mt-5 p-5 bg-light">
                <h2>Login</h2>
                <p className="lead">Sign into your Asterisks Account.</p>
                <hr className="my-3" />
                <form onSubmit={e => onSubmit(e)}>
                    <CSRFToken />
                    <div className="mb-3">
                        <label id="username" className="form-label" >Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            onChange={e => onChange(e)}
                            value={username}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label id="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={e => onChange(e)}
                            value={password}
                            required
                        />
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});

export default connect(mapStateToProps, { loginAPI, RetrieveTask })(Login);