import React from "react"
import ChilComponent from "./ChildComponent"
import AddComponent from "./AddComponent"

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: '1', job: 'dev', salary: '1000' },
            { id: '2', job: 'test', salary: '2000' },
            { id: '3', job: 'leader', salary: '3000' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let tmp = this.state.arrJobs;
        tmp = tmp.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: tmp
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}

                />
                <ChilComponent
                    name={this.state.name}
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}
export default MyComponent;