import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import store from "../store";
import { authStateLoader } from "../actions/PersistState";
import CategoryApi from "../actions/options/categoryAction";
import { connect } from "react-redux";


const Layout = ({CategoryApi, token, children }) => {

    const loader = new authStateLoader();

    store.subscribe(() => {
        loader.saveState(store.getState());
    });

    useEffect(() => {
        if (token !== null || 'null') {
            CategoryApi(token)
        } else if (token === null){
            localStorage.removeItem("http://Asterisks.com:reduxState")
        }
    }, [token])

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
    }
}

export default connect(mapStateToProps, {CategoryApi})(Layout);