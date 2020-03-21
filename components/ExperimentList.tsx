import React from 'react';

import Experiment from './Experiment';
import ExperimentAddNewButton from './ExperimentAddNewButton';
import { ExperimentsConsumer } from './ExperimentsProvider';
import { Experiment as ExperimentType } from './Types';

const ExperimentList = () => {
    const [expandedExperiment, setExpandedExperiment] = React.useState('');

    const handleClick = (id: string) => {
        setExpandedExperiment(id);
    };

    return (
        <ExperimentsConsumer>
            {({ experiments }: any) => {
                return (
                    <>
                        Experiments <ExperimentAddNewButton />
                        {experiments.map(
                            (experiment: ExperimentType, i: number) => {
                                const expanded =
                                    experiment.id === expandedExperiment;

                                return (
                                    <Experiment
                                        expanded={expanded}
                                        key={i}
                                        handleClick={handleClick}
                                        experiment={experiment}
                                    />
                                );
                            },
                        )}
                    </>
                );
            }}
        </ExperimentsConsumer>
    );
};

export default ExperimentList;
