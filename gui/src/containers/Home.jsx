import React from "react";
import { Link } from "react-router-dom";
const Home = () => {

    return (
        <div className="container">
            <section className="mt-5 p-5 bg-light">
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

export default Home;