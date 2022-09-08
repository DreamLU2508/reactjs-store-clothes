import React from 'react';

class ChildrenComponent extends React.Component {
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    getJob = (jobId) => {
        console.log(jobId)
        this.props.deleteArray(jobId)
    }

    render() {
        let jobs = this.props.jobs

        return (
            <div>

                {!this.state.showJob ?
                    <div><button onClick={() => this.handleShowHide()}>show</button></div>
                    :
                    <>
                        <div>{
                            jobs.map((item) => {
                                return (
                                    <div key={item.id} onClick={() => this.getJob(item.id)}>
                                        title: {item.title} - salary: {item.salary}
                                    </div>
                                )
                            })}
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>hide</button></div>
                    </>
                }

            </div>
        )
    }
}

export default ChildrenComponent;