import React from 'react';
import ReactDOM from 'react-dom';

class MyComponents extends React.Component {

    state = {
        name: "Đức Hoàng",
        username: "DreamLU",
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log("check state", this.state)
    }

    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }



    render() {

        return (
            <div>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                />
                My name is {this.state.name}
                <form>
                    <input className='username' type='text' value={this.state.username} onChange={(e) => this.handleChangeUsername(e)} />
                    <input className='password' type='text' value={this.state.password} onChange={(e) => this.handleChangePassword(e)} />
                    <button onClick={(e) => this.handleClick(e)}>click me</button>
                </form>

            </div>
        )
    }
}

export default MyComponents;