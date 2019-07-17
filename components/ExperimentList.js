import React, { Component } from 'react';

import Experiment from './Experiment'
import ExperimentAddNewButton from './ExperimentAddNewButton';
import {ExperimentsConsumer} from './ExperimentsProvider';

class ExperimentList extends Component {

    state = {
        expandedExperiment: null
    }

    handleClick= (id) => {
        this.setState({
            expandedExperiment: id
        })
    }

    render() {
        return (
            <ExperimentsConsumer>
                {({experiments}) =>{
                    return(<>
                        Experiments <ExperimentAddNewButton/>
                        {experiments.map((experiment, i) => {
                            const expanded = experiment.id === this.state.expandedExperiment;
                            console.log(experiment);
                            
                            return <Experiment expanded={expanded} key={i} handleClick={this.handleClick} experiment={experiment}/>
                        })}
                    </>)
                }}
            </ExperimentsConsumer>

        );
    }
}

export default ExperimentList;