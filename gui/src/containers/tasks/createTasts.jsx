import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import PostTask from "../../actions/tasks/postTask";
import { categoryOptions, priorityOptions } from "../../actions/options/dynamicOptions"
import { RetrieveTask } from "../../actions/tasks/retrieveTask";

const CreateTask = ({ RetrieveTask, PostTask, token,isAuth, categories, priorities }) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        primaryCategory: "",
        completed: false
    });


    const { title, description, dueDate, priority, primaryCategory, completed } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        if (title && description) {

            PostTask(token, title, description, dueDate, priority, primaryCategory, completed);
            RetrieveTask(token);
            return <Navigate to="/" />
        };
    };

    if (!isAuth)
        return <Navigate exact to='/' />

    return (
        <div className="container w-75">
            <section className="rounded shadow mx-auto mt-5 p-5 bg-light">
                <img src="https://flyclipart.com/thumbs/react-hexagon-react-1173834.png" alt="React Powered" width='45' height='45' />
                <p className="lead"> Create your React-Powered Task</p>

                <form className="form-group" onSubmit={(e) => onSubmit(e)} >

                    <span>
                        <label htmlFor="Task-Title">Task's Title</label>
                        <input title="Example: Change Oil"
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            onChange={(e) => onChange(e)}
                            value={title}
                            placeholder="Enter Task's Title"
                            required />
                    </span>

                    <span>
                        <label htmlFor="TasksDesc">Description</label>
                        <textarea type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            onChange={(e) => onChange(e)}
                            value={description}
                            placeholder="place description here..."
                            required />
                    </span>

                    <span >
                        <label htmlFor="primaryCategory">Category</label>
                        <select className="form-select"
                            aria-label=".form-select-lg example"
                            id="primaryCategory"
                            name="primaryCategory"
                            onChange={(e) => onChange(e)}
                            value={primaryCategory}>
                            <option >-----------</option>
                            {categoryOptions(categories)}
                        </select>
                    </span>

                    <span>
                        <label htmlFor="priority" >Priority</label>
                        <select className="form-select"
                            id="priority"
                            name="priority"
                            onChange={(e) => onChange(e)}
                            value={priority}>
                            <option >-----------</option>
                            {priorityOptions(priorities)}
                        </select>
                    </span>

                    <span className="datepicker">
                        <label htmlFor="date" className="col-sm-1 col-form-label">Date</label>
                        <input type="date"
                            className="form-control"
                            id="dueDate"
                            name="dueDate"
                            onChange={(e) => onChange(e)}
                            value={dueDate} />
                    </span>

                    <span className="mb-3 mt-3 form-check">
                        <label className="form-check-label" htmlFor="completed">Completed</label>
                        <input type="checkbox"
                            className="form-check-input"
                            id="completed"
                            name="completed"
                            onChange={(e) => onChange(e)}
                            value={completed} />
                    </span>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        isAuth: state.auth.isAuthenticated,
        priorities: state.category.priorities,
        categories: state.category.categories
    }
}

export default connect(mapStateToProps, { PostTask, RetrieveTask })(CreateTask)