import React from 'react';
import { ExperimentsContext } from './ExperimentsProvider';

const ExperimentAddNewButton = () => {
    const { addExperiment } = React.useContext(ExperimentsContext);
    const handleClick = () => {
        if (addExperiment) addExperiment();
    };

    return <button onClick={handleClick}>Add new experiment</button>;
};

export default ExperimentAddNewButton;
