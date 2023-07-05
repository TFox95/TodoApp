import { handleScroll, handleSmartMenu } from "../Utils/navbarUtils";


const Navbar = () => {

    window.onscroll = () => {
        window.addEventListener("scroll", handleScroll)
    }

    const anonLinks =
        <section className={"navbar-container"}>
            <div className={"nav-flex-start"}>
                <a href="/" className={"nav-bg-hover-btn"} id={"nav-logo"}><i className="fa-duotone fa-asterisk"></i>Aestriks</a>
            </div>


            <button className={"navbar-toggle"} id={"smart-menu"} onClick={handleSmartMenu}>
                <span className={"bar"}></span>
                <span className={"bar"}></span>
                <span className={"bar"}></span>
            </button>

            <ul className={"nav-flex-end"}>
                <li className={"navbar-item"}><a href="/login" className={["navbar-links", "nav-bg-hover-btn"].join(" ")}>Login</a></li>
                <li className={"navbar-item"}><a href="/register" className={["navbar-links", "nav-bg-hover-btn"].join(" ")}>Register</a></li>
            </ul>
        </section>
        ;

    return (
        <nav className={"navbar"}>
            {anonLinks}
        </nav>
    )
};

export default Navbar;

