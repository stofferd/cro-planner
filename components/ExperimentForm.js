import React from 'react';
import styled from 'styled-components';

import FormInput from './FormInput';
import Toggle from './Toggle';
import { ExperimentsContext } from './ExperimentsProvider';
// import { validityObj, evidenceObj, effortObj } from '../data/questions';

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
    .form-area {
        display: none;
        &.visible {
            display: block;
        }
    }
`;

const FormArea = styled.div`
    display: none;
    &.visible {
        display: block;
    }
`;

const ExperimentForm = ({ evidence = {}, effort = {}, id, validity = {} }) => {
    // console.log({ validityObj });

    const [view, setView] = React.useState('Validity');
    const { updateExperiment } = React.useContext(ExperimentsContext);

    // update scores
    // React.useEffect(() => {
    //     let newScore = 0;
    //     for (let [key, val] of Object.entries(validity)) {
    //         if (val.toggled === true) newScore += val.vals[1];
    //     }
    //     for (let [key, val] of Object.entries(evidence)) {
    //         if (val.toggled === true) newScore += val.vals[1];
    //     }
    //     updateExperiment(id, null, newScore);
    // }, [validity, evidence, effort]);

    const handleSetValidity = (name, value) => {
        // const newValidity = {
        //     ...validity,
        // };
        // newValidity[name].toggled = !validity[name].toggled;
        // setValidity({ ...newValidity });

        console.log({ name });
        console.log({ value });

        updateExperiment(id, { name: { value } });
    };
    const handleSetEvidence = name => {
        // const newEvidence = {
        //     ...evidence,
        // };
        // newEvidence[name].toggled = !evidence[name].toggled;
        // setEvidence({ ...newEvidence });
    };

    // construct form toggles - validity
    let validityOptions = [];
    for (let [key, obj] of Object.entries(validity)) {
        // console.log({ key });

        // console.log({ obj });

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
    for (let [key, obj] of Object.entries(evidence)) {
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
                Effort stuff
            </FormArea>
        </div>
    );
};

export default ExperimentForm;
