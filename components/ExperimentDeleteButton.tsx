import React from 'react';
import {ExperimentsConsumer} from './ExperimentsProvider';



const ExperimentDeleteButton = ({id}) => {
    return (
        <ExperimentsConsumer>
            {({deleteExperiment})=>{
                return(
                    <button onClick={() => {
                        deleteExperiment(id);
                    }}>delete</button>
                )
            }}
        </ExperimentsConsumer>
    );
};

export default ExperimentDeleteButton;