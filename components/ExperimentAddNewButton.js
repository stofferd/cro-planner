import React, { Component } from 'react';
import { LOCAL_EXPERIMENT_QUERY } from './ExperimentList';
import { Query } from 'react-apollo'

class ExperimentAddNewButton extends Component {

    client = null;
    data = null;

    handleClick = () => {
        console.log(this.client);
        console.log(this.data);

        if (this.client) {

            const experiments = this.data.experiments ? this.data.experiments : [];
            experiments.unshift({
                __typename: "Experiment",
                id: '_' + Math.random().toString(36).substr(2, 9),
                name: 'New experiment'
            }) 

            this.client.writeData({
                data: {
                    experiments
                }
            })

        }
    }

    render() {
        return (
            <Query query={LOCAL_EXPERIMENT_QUERY}>
                {({data, client}) => {
                    // console.log(data);
                    
                    this.client = client;
                    this.data = data;
                    return <button onClick={this.handleClick}>Add new experiment</button>
                }}
            </Query>
        );
    }
}

export default ExperimentAddNewButton;