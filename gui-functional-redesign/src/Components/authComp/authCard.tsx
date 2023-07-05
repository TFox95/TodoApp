import { NavLink } from "react-router-dom";


const AuthCard = (props: any) => {

    return (
        <main className="auth">
            <section className="auth-container">
                <div className="auth-form" >

                    <div className="auth-form-block-content">
                        <h2>{props.formContentSubheader}</h2>
                        <p>{props.formContentparagraph}</p>
                    </div>

                    <div className="auth-form-block">
                        <div className="auth-form-item">
                            <label htmlFor="username" className="auth-username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Username or Email" required />
                        </div>

                        <div className="auth-form-item">
                            <label htmlFor="password" className="auth-password">Password </label>
                            <input type="password" name="password" id="password" required />
                        </div>

                        <div className="auth-form-item">
                            <label htmlFor="re_password" className={props.rePasslabel}>Confirm Password</label>
                            <input type="password" name="re_password" id={props.rePass} required />
                        </div>

                        <div className={props.remember}>
                            <div className="checkbox">
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                        </div>

                        <div className="auth-button">
                            <button type="submit">{props.authButton}</button>
                        </div>
                    </div>

                    <div className="auth-form-item-img">
                        <img src={props.formItemImg}
                            alt="uh oh something happened; try again later." />
                    </div>

                    <div className="auth-form-footer">
                        <div className="auth-form-footer-block">
                            <h5>{`${props.authFooterH5} `}<NavLink to={props.authFooterLink}>Click Here</NavLink></h5>
                        </div>
                    </div>
                </div>

                <div className="auth-form-img">
                    <img src={props.formItemImg}
                        alt="uh oh something happened; try again later." />
                </div>

            </section>
        </main>
    )
}

export default AuthCard;