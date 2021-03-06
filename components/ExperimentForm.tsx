import React from 'react';
import styled from 'styled-components';

import FormInput from './FormInput';
import Toggle from './Toggle';
import Slider from './Slider';
import { ExperimentsContext } from './ExperimentsProvider';

import { Effort, Evidence, Validity } from './Types';

type Props = {
    evidence?: Evidence;
    effort?: Effort;
    id: string;
    validity?: Validity;
};

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
    text-align: center;
    /* border-bottom: 1px solid #dadada; */
    padding-bottom: 0;
    h3 {
        margin: 0;
        border-bottom: 1px solid #dadada;
    }
    .selected {
        border-bottom: 5px solid ${props => props.theme.orange};
        color: ${props => props.theme.orange};
    }
`;

const FormArea = styled.div`
    display: none;
    &.visible {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const ExperimentForm = ({ evidence, effort, id, validity }: Props) => {
    // console.log({ validityObj });

    const [view, setView] = React.useState('Validity');
    const { updateExperiment } = React.useContext(ExperimentsContext);
    const handleSetValidity = (name: string, value: number) => {
        if (updateExperiment)
            updateExperiment(id, 'validity', name, 'value', value, true);
    };
    const handleSetEvidence = (name: string, value: number) => {
        if (updateExperiment)
            updateExperiment(id, 'evidence', name, 'value', value, true);
    };
    const handleSetEffort = (name: string, value: number) => {
        if (updateExperiment)
            updateExperiment(id, 'effort', name, 'value', value, true);
    };

    // construct form toggles - validity
    let validityOptions = [];
    for (let [key, obj] of Object.entries(validity || [])) {
        validityOptions.push(
            <Toggle
                key={key}
                name={key}
                label={obj.text}
                onChange={handleSetValidity}
                value={obj.value}
                vals={obj.vals}
            />,
        );
    }

    // construct form toggles - evidence
    let evidenceOptions = [];
    for (let [key, obj] of Object.entries(evidence || [])) {
        evidenceOptions.push(
            <Toggle
                key={key}
                name={key}
                label={obj.text}
                onChange={handleSetEvidence}
                value={obj.value}
                vals={obj.vals}
            />,
        );
    }

    // construct form toggles - effort
    let effortOptions = [];
    for (let [key, obj] of Object.entries(effort || [])) {
        // console.log({ obj });

        effortOptions.push(
            <Slider
                key={key}
                name={key}
                label={obj.text}
                onChange={handleSetEffort}
                radioLabels={obj.labels || []}
                value={obj.value}
                vals={obj.vals}
            />,
        );
    }

    return (
        <div>
            <Tabs>
                <h3
                    className={view === 'Validity' ? 'selected' : ''}
                    onClick={() => setView('Validity')}
                >
                    Validity
                </h3>
                <h3
                    className={view === 'Evidence' ? 'selected' : ''}
                    onClick={() => setView('Evidence')}
                >
                    Evidence
                </h3>
                <h3
                    className={view === 'Effort' ? 'selected' : ''}
                    onClick={() => setView('Effort')}
                >
                    Effort
                </h3>
            </Tabs>

            <FormArea className={view === 'Validity' ? 'visible ' : ''}>
                {validityOptions}
            </FormArea>

            <FormArea className={view === 'Evidence' ? 'visible ' : ''}>
                {evidenceOptions}
            </FormArea>

            <FormArea className={view === 'Effort' ? 'visible ' : ''}>
                {effortOptions}
            </FormArea>
        </div>
    );
};

export default ExperimentForm;
