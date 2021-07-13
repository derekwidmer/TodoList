import React, { Component } from 'react'
import './NewTodoForm.css'

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
        this.props.addItem(this.state)
        this.setState({ task: "" })
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">Task:</label>
                <input onChange={this.handleChange} name="task" id="task" placeholder="Add a To-Do" value={this.state.task}></input>
                <button>Save</button>
            </form>
        )
    }
}

export default NewTodoForm;