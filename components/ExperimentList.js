import React, { Component } from 'react';

import Experiment from './Experiment'
import ExperimentAddNewButton from './ExperimentAddNewButton';
import {ExperimentsConsumer} from './ExperimentsProvider';

class ExperimentList extends Component {
    render() {
        return (
            <ExperimentsConsumer>
                {({experiments}) =>{
                    return(<>
                        <ExperimentAddNewButton/>
                        {experiments.map((experiment, i) => {
                            console.log(experiment);
                            
                            return <Experiment key={i} experiment={experiment}/>
                        })}
                    </>)
                }}
            </ExperimentsConsumer>

        );
    }
}

export default ExperimentList;