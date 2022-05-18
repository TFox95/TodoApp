import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import checkAuthentication from "../actions/auth/authenticatedaction";

const Layout = ({ children }) => {

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