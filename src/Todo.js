import React, { Component } from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task }
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCompletion = this.handleCompletion.bind(this)
    }
    handleDelete() {
        this.props.removeItem(this.props.id);
    }
    toggleForm() {
        this.setState(state => ({ isEditing: !state.isEditing }));
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.editItem(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    handleCompletion() {
        this.props.toggleCompletion(this.props.id)
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result =
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} name="task" value={this.state.task}></input>
                        <button>Save</button>
                    </form>
                </div>
        } else {
            result =
                <div className={`Todo ${this.props.completed ? 'completed' : ''}`}>
                    <div className="Todo-taskText" onClick={this.handleCompletion} >{this.props.task}</div>
                    <div className="Todo-icons">
                        <FontAwesomeIcon onClick={this.toggleForm} style={{ cursor: "pointer" }} className="icon" icon={faEdit} />
                        <FontAwesomeIcon onClick={this.handleDelete} style={{ cursor: "pointer", marginLeft: "15px" }} className="icon" icon={faTrash} />
                    </div>
                </div >
        }
        return result;
    }
}

export default Todo;