import React, { Fragment } from "react";
import Navbar from "./Navbar";
import store from "../store";
import { authStateLoader } from "../actions/PersistState";


const Layout = ({ children }) => {

    const loader = new authStateLoader();

    store.subscribe(() => {
        loader.saveState(store.getState());
    });

    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
};

export default Layout;