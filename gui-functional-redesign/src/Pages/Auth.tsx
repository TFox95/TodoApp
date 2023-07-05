import * as React from "react";
import { useLocation } from "react-router";
import AuthCard from "../Components/authComp/authCard";
import un_waiting from "../Assets/undraw_waiting__for_you_ldha (1).svg";
import un_friendship from "../Assets/undraw_friendship_mni7.svg"


const Auth = (): React.ReactNode => {
    const pathlocation = useLocation().pathname;
    let DisplayedCard;

    if (pathlocation == String("/login")) {
        DisplayedCard = <AuthCard
            formContentSubheader={"Welcome back to our Application"}
            formContentparagraph={"Please Login to proceed with this platform"}
            rePasslabel={"display-none"}
            rePass={"display-none"}
            remember={"form-item"}
            authButton={"Log in"}
            formItemImg={un_waiting}
            authFooterH5={"Don't have an account?"}
            authFooterLink={"/register"}
        />;
    } else if (pathlocation == String("/register")) {
        DisplayedCard = <AuthCard
            formContentSubheader={"Welcome to Aestriks"}
            formContentparagraph={"Register with Aestriks to start your task journey"}
            rePasslabel={"auth-password"}
            rePass={"re_password"}
            remember={"display-none"}
            authButton={"Register"}
            formItemImg={un_friendship}
            authFooterH5={"Have an account?"}
            authFooterLink={"/login"}
        />;
    };

    return (
        <>
            {DisplayedCard}
        </>
    )
}

export default Auth