import React from 'react';
import AddComponent from './AddComponent';
import ChildrenComponent from './ChildrenComponent';

class MyComponents extends React.Component {

    state = {
        name: "Đức Hoàng",
        username: "DreamLU",
        jobs: [
            { id: '1', title: 'cong nhan', salary: 500 },
            { id: '2', title: 'Phu ho', salary: 100 },
            { id: '3', title: 'giam doc', salary: 5000 },
        ]
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleAddArray = (job) => {
        this.setState({
            jobs: [...this.state.jobs, job]
        })
    }

    handleDeleteArray = (jobId) => {
        this.setState({
            jobs: this.state.jobs.filter((item) => {
                return item.id !== jobId
            })
        })
    }

    render() {

        return (
            <div>
                <div>
                    <input
                        type='text'
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                    />
                    My name is {this.state.name}
                </div>

                <AddComponent
                    addArray={this.handleAddArray}

                />
                <ChildrenComponent
                    showJobs={false}
                    jobs={this.state.jobs}
                    deleteArray={this.handleDeleteArray}
                />
            </div>
        )
    }
}

export default MyComponents;