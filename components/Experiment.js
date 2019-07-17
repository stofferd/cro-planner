// import React, { Component } from 'react';
import React from 'react';
import StyledCard from '../styles/StyledCard';
import ExperimentForm from './ExperimentForm';

const Experiment = ({experiment: {id, name}, handleClick, expanded}) => {
    const experimentForm = expanded ?  <ExperimentForm /> : null;
    return (
        <StyledCard onClick={()=>handleClick(id)}>
            <div>
              {name} 0
            </div>
            {experimentForm}
        </StyledCard>
    );
};

export default Experiment;