import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import store from "../store";
import { authStateLoader } from "../actions/PersistState";
import CategoryApi from "../actions/options/categoryAction";
import { connect } from "react-redux";
import CheckAuth from "../actions/auth/authenticatedaction";
import { RetrieveTask } from "../actions/tasks/retrieveTask";


const Layout = ({RetrieveTask, CheckAuth, CategoryApi, token, isAuthenticated, children }) => {

    const loader = new authStateLoader();

    store.subscribe(() => {
        loader.saveState(store.getState().auth);
    });

    useEffect(() => {

        if (token) {
            CheckAuth(token);
            if (isAuthenticated) {
                CategoryApi(token);
                RetrieveTask(token);
            } else {
                alert("error: Current Credintials are not valid please log in later");
                localStorage.removeItem("http://Asterisks.com:reduxState");
            }

        } else {
            localStorage.removeItem("http://Asterisks.com:reduxState");
        }
    }, [token, CheckAuth, isAuthenticated, CategoryApi])

    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { CategoryApi, RetrieveTask, CheckAuth })(Layout);