import React, { Component } from 'react'
import Todo from './Todo'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.editItem = this.editItem.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    addItem(item) {
        this.setState(state => {
            let newItems = [...state.items, item]
            return { items: newItems }
        })
    }

    removeItem(id) {
        this.setState(state => {
            return { items: state.items.filter(item => item.id !== id) }
        })
    }

    editItem(id, newText) {
        let updatedItems = this.state.items.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: newText }
            } else {
                return todo;
            }
        })
        this.setState({ items: updatedItems })
    }

    toggleCompletion(id) {
        let updatedItems = this.state.items.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo;
            }
        })
        this.setState({ items: updatedItems })
    }

    render() {
        return (
            <div className="TodoList">
                <h1 className="TodoList-title">Todo List</h1>
                <div className="TodoList-items">
                    {this.state.items.map((item) => {
                        return <Todo
                            key={item.id}
                            task={item.task}
                            id={item.id}
                            completed={item.completed}
                            removeItem={this.removeItem}
                            editItem={this.editItem}
                            toggleCompletion={this.toggleCompletion} />
                    })}
                </div>
                <NewTodoForm addItem={this.addItem} />
            </div>
        )
    }
}

export default TodoList;