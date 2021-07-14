import React, { Component } from 'react'
import './NewTodoForm.css'
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({ task: evt.target.value })
    }
    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addItem({ task: this.state.task, id: uuidv4(), completed: false })
        this.setState({ task: "" })
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                {/* <label htmlFor="task">Task:</label> */}
                <input onChange={this.handleChange} name="task" id="task" placeholder="Add a To-Do" value={this.state.task}></input>
                <button>Save</button>
            </form>
        )
    }
}

export default NewTodoForm;