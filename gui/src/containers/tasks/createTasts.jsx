import React, { useState } from "react";
import { connect } from "react-redux";
import CategoryApi from "../../actions/options/categoryAction";




const CreateTask = ({ categories, priorities }) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        category: "",
        completed: false
    });

    const { title, description, dueDate, priority, category, completed } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        if (title && description) {}
    }

    let loadedCategories = [];
    let loadedPriorities = [];

    for (let i in categories) {
        loadedCategories.push(categories[i]);
    };

    for (let i in priorities) {
        loadedPriorities.push(priorities[i])
    }

    let dynamicPriorities = loadedPriorities.map((data) => {
        return <option key={data.id} value={data.id}>{data.title}</option>;
    });


    let dynamicCategories = loadedCategories.map((data) => {
        return <option key={data.id} value={data.id}>{data.title}</option>;
    });

    return (
        <div className="container w-75">
            <section className="rounded shadow mx-auto mt-5 p-5 bg-light">
                <img src="https://flyclipart.com/thumbs/react-hexagon-react-1173834.png" alt="React Powered" width='45' height='45' />
                <p className="lead"> Create your React-Powered Task</p>

                <form className="form-group" >

                    <span>
                        <label htmlFor="Task-Title">Task's Title</label>
                        <input title="Example: Change Oil"
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            onChange={(e) => onchange(e)}
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
                            onChange={(e) => onchange(e)}
                            value={description}
                            placeholder="place description here..."
                            required />
                    </span>

                    <span >
                        <label htmlFor="category">Category</label>
                        <select className="form-select"
                            aria-label=".form-select-lg example"
                            id="category"
                            name="category"
                            onChange={(e) => onchange(e)}
                            value={category}>
                            <option >-----------</option>
                            {dynamicCategories}
                        </select>
                    </span>

                    <span>
                        <label htmlFor="priority" >Priority</label>
                        <select className="form-select"
                            id="priority"
                            name="priority"
                            onChange={(e) => onchange(e)}
                            value={priority}>
                            <option >-----------</option>
                            {dynamicPriorities}
                        </select>
                    </span>

                    <span className="datepicker">
                        <label htmlFor="date" className="col-sm-1 col-form-label">Date</label>
                        <input type="date"
                            className="form-control"
                            id="dueDate"
                            name="dueDate"
                            onChange={(e) => onchange(e)}
                            value={dueDate}/>
                    </span>

                    <span className="mb-3 mt-3 form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        <input type="checkbox"
                            className="form-check-input"
                            id="completed"
                            name="completed"
                            onChange={(e) => onchange(e)}
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
        auth: state.auth,
        categories: state.category.categories,
        priorities: state.category.priorities,
    }
}

export default connect(mapStateToProps, { CategoryApi })(CreateTask)