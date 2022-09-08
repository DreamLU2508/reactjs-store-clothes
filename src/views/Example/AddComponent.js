import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: ""
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.addArray({
            id: Math.random(),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: "",
            salary: ""
        })
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }


    render() {
        return (
            <form>
                <input className='title' type='text' value={this.state.title} onChange={(e) => this.handleChangeTitle(e)} />
                <input className='salary' type='text' value={this.state.salary} onChange={(e) => this.handleChangeSalary(e)} />
                <button onClick={(e) => this.handleClick(e)}>click me</button>
            </form>
        )
    }
}

export default AddComponent;