import React, { Component } from 'react'
import Todo from './Todo'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import { v4 as uuidv4 } from 'uuid';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {
        let newItem = { ...item, id: uuidv4() }
        this.setState(state => {
            let newItems = [...state.items, newItem]
            return { items: newItems }
        })
    }

    removeItem(id) {
        console.log('Remove item called')
        this.setState(state => {
            return { items: state.items.filter(item => item.id !== id) }
        })
    }

    render() {
        return (
            <div className="TodoList">
                <h1 className="TodoList-title">Todo List</h1>
                <div className="TodoList-items">
                    {this.state.items.map((item) => {
                        return <Todo key={item.id} task={item.task} removeItem={() => this.removeItem(item.id)} />
                    })}
                </div>
                <NewTodoForm addItem={this.addItem} />
            </div>
        )
    }
}

export default TodoList;