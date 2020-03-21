import React, { Component } from 'react';
import FormInput from './FormInput';
import styled from 'styled-components';
import { GoalContext } from './GoalProvider';

const StyledOverview = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const Goal = () => {
    // goalConsumerData: any | null = null;
    const {
        name,
        sessions,
        conversions,
        conversionValue,
        update,
    } = React.useContext(GoalContext);
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, type, value } = e.currentTarget;
        const val = type === 'number' ? parseFloat(value) : value;
        if (update) update(name, type, val);

        // get local storage
        const existingGoal = window.localStorage.getItem('goal')
            ? JSON.parse(window.localStorage.getItem('goal') || '')
            : { name: '', sessions: 0, conversions: 0, conversionValue: 0 };
        existingGoal[name] = val;
        window.localStorage.setItem('goal', JSON.stringify(existingGoal));
    };

    return (
        <>
            <FormInput
                name="name"
                niceName="Goal"
                onChange={handleChange}
                value={name}
                placeholder="Add in your goal"
            />

            <StyledOverview>
                <FormInput
                    type="number"
                    name="sessions"
                    niceName="Sessions"
                    onChange={handleChange}
                    value={sessions}
                    placeholder="Add in your sessions"
                />
                <FormInput
                    type="number"
                    name="conversions"
                    niceName="Conversions"
                    onChange={handleChange}
                    value={conversions}
                    placeholder="Add in your conversions"
                />
                <FormInput
                    type="number"
                    name="conversionValue"
                    niceName="Conversion Value"
                    onChange={handleChange}
                    value={conversionValue}
                    placeholder="Add in your conversion value"
                />
            </StyledOverview>
        </>
    );
};

export default Goal;
