import React from 'react';
import { ExperimentsContext } from './ExperimentsProvider';

const ExperimentDeleteButton = ({ id }: { id: string }) => {
    const { deleteExperiment } = React.useContext(ExperimentsContext);

    return (
        <button
            onClick={() => {
                if (deleteExperiment) deleteExperiment(id);
            }}
        >
            delete
        </button>
    );
};

export default ExperimentDeleteButton;
