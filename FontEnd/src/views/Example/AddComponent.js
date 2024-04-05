import React from "react";

class AddComponent extends React.Component {
    state = {
        job: '',
        salary: ''
    }
    handleChangeJob = (event) => {
        this.setState({
            job: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.salary || !this.state.job) {
            alert("empty");
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            job: this.state.job,
            salary: this.state.salary
        });
        this.setState({
            job: '',
            salary: ''
        })
    }
    render() {
        return (
            <>

                <form>
                    <input type="text" value={this.state.job} onChange={(event) => this.handleChangeJob(event)}></input><br></br>
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)}></input><br></br>
                    <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </form >
            </>
        )
    }
}
export default AddComponent