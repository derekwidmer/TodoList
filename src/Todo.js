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
                <div className="Todo">
                    <p>
                        {this.props.task}
                        <FontAwesomeIcon onClick={this.toggleForm} style={{ cursor: "pointer" }} className="icon" icon={faEdit} />
                        <FontAwesomeIcon onClick={this.handleDelete} style={{ cursor: "pointer", marginLeft: "15px" }} icon={faTrash} />
                    </p>
                </div>
        }
        return result;
    }
}

export default Todo;