import React, { Component } from 'react';
import FormInput from './FormInput';
import styled from 'styled-components';
import {GoalConsumer} from './GoalProvider';


const StyledOverview = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

class Goal extends Component {

    // state = {
    //     name: '',
    //     sessions: 0,
    //     conversions: 0,
    //     conversionValue: 0
    // }

    goalConsumerData = null;

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.goalConsumerData.update(name,type,val);

        // this.setState({
        //     [name]: val
        // })
        // this.goalConsumerData.update({
        //     [name]: val
        // })

        // get local storage
        const existingGoal = window.localStorage.getItem('goal') ?  JSON.parse(window.localStorage.getItem('goal')): { name: '', sessions: 0, conversions: 0, conversionValue: 0 };

        existingGoal[name] = val;
        
        window.localStorage.setItem('goal', JSON.stringify(existingGoal));

    }

    render() {
        return (
            <GoalConsumer>
                {(goalConsumerData) => {
                    this.goalConsumerData = goalConsumerData;
                    const {name, sessions, conversions, conversionValue} = goalConsumerData;
                    console.log(this.goalConsumerData);
                    
                    return (
                        <>
                        <FormInput name="name" niceName="Goal" onChange={this.handleChange} value={name} placeholder="Add in your goal" />

                        <StyledOverview>
                            <FormInput type="number" name="sessions" niceName="Sessions" onChange={this.handleChange} value={sessions} placeholder="Add in your sessions" />
                            <FormInput type="number" name="conversions" niceName="Conversions" onChange={this.handleChange} value={conversions} placeholder="Add in your conversions" />
                            <FormInput type="number" name="conversionValue" niceName="Conversion Value" onChange={this.handleChange} value={conversionValue} placeholder="Add in your conversion value" />
                        </StyledOverview>
                        </>
                    )
                }}
            </GoalConsumer>
        );
    }
}


export default Goal;
