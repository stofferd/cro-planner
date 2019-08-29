// import React, { Component } from 'react';
import React, { useState } from 'react';
import StyledCard from '../styles/StyledCard';
import ExperimentForm from './ExperimentForm';
import styled from 'styled-components';
import FormInput from './FormInput';
import ExperimentDeleteButton from './ExperimentDeleteButton';

const Summary = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const updateLocalStorage = (id, newName) => {
    // get local storage
    const experiments = window.localStorage.getItem('experiments')
        ? JSON.parse(window.localStorage.getItem('experiments'))
        : [];

    experiments.map((exp, i) => {
        if (exp.id === id) {
            exp.name = newName;
        }
        return exp;
    });

    window.localStorage.setItem('experiments', JSON.stringify(experiments));
};

const Experiment = ({
    experiment: { id, name, score },
    handleClick,
    expanded,
}) => {
    // state items, fn, default value
    const [experimentName, setName] = useState(name);
    return (
        <StyledCard onClick={() => handleClick(id)}>
            <Summary>
                {/* onChange, name, niceName, value, placeholder, type */}
                <FormInput
                    onChange={e => {
                        setName(e.target.value);
                        updateLocalStorage(id, e.target.value);
                    }}
                    name="name"
                    niceName=""
                    placeholder={'Add a hyopthesis to test'}
                    value={experimentName}
                />{' '}
                {score}
            </Summary>
            {expanded && (
                <>
                    <ExperimentForm id={id} />{' '}
                    <div>
                        <ExperimentDeleteButton id={id} />
                    </div>
                </>
            )}
        </StyledCard>
    );
};

export default Experiment;
