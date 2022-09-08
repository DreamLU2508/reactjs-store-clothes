import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleClick = () => {
        if (!this.state.title) {
            toast.error("Missing input!");
            return;
        }
        this.props.addListTodo({
            id: Math.random(),
            title: this.state.title
        })
        this.setState({
            title: ''
        })
        toast.success("Wow so easy!");
    }

    render() {
        let { title } = this.state;
        return (
            <div className="todo-input">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => { this.handleChangeTitle(e) }}
                />
                <button onClick={() => this.handleClick()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;
