import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import checkAuthentication from "../actions/auth/authenticatedaction";

const Layout = ({ children, token, checkAuthentication }) => {

    useEffect(() => {
        checkAuthentication(token);
    }, []);

    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {checkAuthentication})(Layout);