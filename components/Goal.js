import React, { Component } from 'react';
import FormInput from './FormInput';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'

export const LOCAL_GOAL_QUERY = gql`
    query LOCAL_GOAL_QUERY {
        goal @client {
            name
            sessions
            conversions
            conversionValue
        }
    }
`;

const StyledOverview = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

class Goal extends Component {

    state = {
        name: '',
        sessions: 0,
        conversions: 0,
        conversionValue: 0
    }

    client = null;

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({
            [name]: val
        })
        if (this.client) {
            this.client.writeData({
                data: {
                    goal: {
                        [name]: val,
                        __typename: "Goal"
                    }
                }
            })
        }
    }

    render() {
        return (
            <Query query={LOCAL_GOAL_QUERY}>
                {({data, client}) => {
                console.log(data);
                this.client = client;
                return(
                    <>
                    <FormInput name="name" niceName="Goal" onChange={this.handleChange} value={this.state.name} placeholder="Add in your goal" />

                    <StyledOverview>
                        <FormInput type="number" name="sessions" niceName="Sessions" onChange={this.handleChange} value={this.state.sessions} placeholder="Add in your sessions" />
                        <FormInput type="number" name="conversions" niceName="Conversions" onChange={this.handleChange} value={this.state.conversions} placeholder="Add in your conversions" />
                        <FormInput type="number" name="conversionValue" niceName="Conversion Value" onChange={this.handleChange} value={this.state.conversionValue} placeholder="Add in your conversion value" />
                    </StyledOverview>
                    </>
                )}}
            </Query>
        );
    }
}


export default Goal;
