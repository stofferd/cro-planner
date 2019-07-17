import React, { Component } from 'react';
import {ExperimentsConsumer} from './ExperimentsProvider';

class ExperimentAddNewButton extends Component {

    addExperiment = null;

    handleClick = () => {

        // 1. add new experiment to react context
        const id = '_' + Math.random().toString(36).substr(2, 9);
        const name = "New Experiment";

        this.addExperiment(id, name);

        // 2. add new experiment to local storage
        const experimentArray = window.localStorage.getItem('experiments') ?  JSON.parse(window.localStorage.getItem('experiments')): [];

        experimentArray.unshift({
            id,
            name,
            score: 0
        });
        
        window.localStorage.setItem('experiments', JSON.stringify(experimentArray));

    }

    render() {
        return (
            <ExperimentsConsumer>
                {({addExperiment})=>{
                    this.addExperiment = addExperiment;
                    return(
                        <button onClick={this.handleClick}>Add new experiment</button>
                    )
                }}
            </ExperimentsConsumer>
        );
    }
}

export default ExperimentAddNewButton;