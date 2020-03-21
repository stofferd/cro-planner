import React, { useState } from 'react';
import StyledCard from '../styles/StyledCard';
import ExperimentForm from './ExperimentForm';
import styled from 'styled-components';
import FormInput from './FormInput';
import ExperimentDeleteButton from './ExperimentDeleteButton';
import { Experiment as ExperimentType } from './Types';

type Props = {
    experiment: ExperimentType;
    handleClick: (id: string) => void;
    expanded: boolean;
};

const Summary = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const updateLocalStorage = (id: string, newName: string) => {
    // get local storage
    const experiments = window.localStorage.getItem('experiments')
        ? JSON.parse(window.localStorage.getItem('experiments') as string)
        : [];

    experiments.map((exp: ExperimentType, i: number) => {
        if (exp.id === id) {
            exp.name = newName;
        }
        return exp;
    });

    window.localStorage.setItem('experiments', JSON.stringify(experiments));
};

const Experiment = ({
    experiment: { effort, evidence, id, name, score, validity },
    handleClick,
    expanded,
}: Props) => {
    // state items, fn, default value
    const [experimentName, setName] = useState(name);
    return (
        <StyledCard onClick={() => handleClick(id)}>
            <Summary>
                <FormInput
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        setName(
                            e && e.currentTarget && e.currentTarget.value
                                ? e.currentTarget.value
                                : '',
                        );
                        updateLocalStorage(id, e.currentTarget.value || '');
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
                    <ExperimentForm
                        effort={effort}
                        evidence={evidence}
                        id={id}
                        validity={validity}
                    />
                    <div>
                        <ExperimentDeleteButton id={id} />
                    </div>
                </>
            )}
        </StyledCard>
    );
};

export default Experiment;
