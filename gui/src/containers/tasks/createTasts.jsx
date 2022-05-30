import React from "react";
import { connect } from "react-redux";

const CreateTask = ({ isAuthenticated, token }) => {

    return (
        <div>
            <section className="rounded shadow mx-auto mt-5 p-5 bg-light">
                <img src="https://flyclipart.com/thumbs/react-hexagon-react-1173834.png" alt="React Powered" width='45' height='45' />
                <p className="lead"> Create your React-Powered Task</p>

                <form className="form-group">

                    <span>
                        <label for="Task-Title">Task's Title</label>
                        <input title="Example: Change Oil" type="text" className="form-control" id="Task-Title" aria-describedby="titleHelp" placeholder="Enter Task's Title"/>
                    </span>

                    <span>
                        <label for="TasksDesc">Description</label>
                        <textarea type="text" className="form-control" id="TasksDesc" placeholder="place description here..." />
                    </span>

                    <span >
                        <label for="form-category">Category</label>
                        <select className="form-select" aria-label=".form-select-lg example" id="form-category">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </span>

                    <span>
                        <label for="form-priority" >Priority</label>
                        <select className="form-select" aria-label=".form-select-lg example" id="form-category">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </span>

                    <span className id="datepicker">
                        <label for="date" className="col-sm-1 col-form-label">Date</label>
                        <input type="date" className="form-control" id="date" />
                    </span>
                    
                    <span className="mb-3 mt-3 form-check">
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    </span>

                    <button title="Submit Entry" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps)(CreateTask)