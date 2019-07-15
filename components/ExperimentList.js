import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'

import Experiment from './Experiment'
import ExperimentAddNewButton from './ExperimentAddNewButton';

export const LOCAL_EXPERIMENT_QUERY = gql`
    query LOCAL_EXPERIMENT_QUERY {
        experiments @client {
            id
            name
        }
    }
`;

class ExperimentList extends Component {
    render() {
        return (
            <Query query={LOCAL_EXPERIMENT_QUERY}>
                {({data, client}) => {
                    // console.log(data);
                    const experiments = data && data.experiments ? data.experiments: [];
                    console.log(experiments);
                    
                    return(
                        <div>Add new experiment
                            <ExperimentAddNewButton/>
                            {experiments.map((experiment, i) => {
                                return <Experiment key={i} experiment={experiment}/>
                            })}
                        </div>

                    )      
                  
                }}
            </Query>
        );
    }
}

export default ExperimentList;