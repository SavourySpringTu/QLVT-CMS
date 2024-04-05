import React from "react";

class ChilComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs

        })
    }
    handleClickDelete = (job) => {
        console.log(job);
        this.props.deleteJob(job)
    }
    render() {
        let a = this.props.arrJobs;
        let showJobs = this.state.showJobs;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <div>
                        <div>
                            {this.props.name}
                            {
                                a.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.job} - {item.salary}
                                            <span onClick={() => this.handleClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </div>
                }
            </>
        )
    }
}
export default ChilComponent;