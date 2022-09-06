import React from 'react';
import ReactDOM from 'react-dom';

class MyComponents extends React.Component {

    state = {
        name: "Đức Hoàng",
        username: "DreamLU"
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
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
            </div>
        )
    }
}

export default MyComponents;