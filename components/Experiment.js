// import React, { Component } from 'react';
import React from 'react';
import FormInput from './FormInput';
import StyledCard from '../styles/StyledCard';


const Experiment = ({experiment: {id, name}}) => {
    return (
        <StyledCard>
            <p>{id}</p>
            <p>{name}</p>
        </StyledCard>
    );
};

export default Experiment;