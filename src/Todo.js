import React, { Component } from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete() {
        this.props.removeItem();
    }
    render() {
        return (
            <div className="Todo">
                <p>
                    {this.props.task}
                    <FontAwesomeIcon style={{ cursor: "pointer" }} className="icon" icon={faEdit} />
                    <FontAwesomeIcon onClick={this.handleDelete} style={{ cursor: "pointer", marginLeft: "15px" }} icon={faTrash} />
                </p>
            </div>
        )
    }
}

export default Todo;