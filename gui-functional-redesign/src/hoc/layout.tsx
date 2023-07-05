import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({ children }: any) => {

    return (
        <Fragment>
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    );
};

export default Layout;