import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodo: [
            { id: "todo1", title: "Play game" },
            { id: "todo2", title: "Học Node JS" },
            { id: "todo3", title: "Học ReactJS" },
        ],
        todoEdit: {}
    }

    addListTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
    }

    handleDelete = (todoId) => {
        let currentList = this.state.listTodo

        this.setState({
            listTodo: currentList.filter((item) => {
                return item.id !== todoId
            }),
            todoEdit: {}
        })
        toast.success("Delete success!")
    }

    handleClickEdit = (todo) => {
        let { todoEdit, listTodo } = this.state;

        let isEmptyObj = Object.keys(todoEdit).length === 0;

        if (!isEmptyObj && todoEdit.id === todo.id) {


            this.setState({
                todoEdit: {}
            })
            toast.success("Update success!")
            return;
        }

        console.log(todo)

        this.setState({
            todoEdit: todo
        })

    }

    handleChangeItemTodo = (e) => {
        let copy = this.state.todoEdit;
        copy.title = e.target.value;
        this.setState({
            todoEdit: copy
        })
    }

    render() {
        let { listTodo, todoEdit } = this.state;
        let isEmptyObj = Object.keys(todoEdit).length === 0;

        return (
            <>
                <p>
                    Todo App with DreamLU
                </p>
                <div className="todo-container">
                    <AddTodo
                        addListTodo={this.addListTodo}
                    />
                    <div className="todo-content">
                        {
                            listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <span>{index + 1}</span> - {
                                            isEmptyObj ? item.title : <>{item.id === todoEdit.id ? <input value={todoEdit.title} onChange={(e) => this.handleChangeItemTodo(e)} /> : item.title}</>
                                        }
                                        <button onClick={() => this.handleClickEdit(item)}>
                                            {isEmptyObj === false && item.id === todoEdit.id ? 'Update' : 'Edit'}
                                        </button>
                                        <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;