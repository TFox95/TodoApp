import React from "react";

const Register = () => {

    return (
        <div className="container">
            <section className="mt-5 p-5 bg-light">
                <form>
                    <div className="mb-3">
                        <label id="username" className="form-label" >Username</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label id="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label id="re_password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="re_password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default Register;