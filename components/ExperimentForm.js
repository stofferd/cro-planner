
import FormInput from './FormInput';
import Toggle from './Toggle';
import styled from 'styled-components';


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

import React, { Component } from 'react';

class ExperimentForm extends Component {

    state = {
        view: "Validity",
        fold: false, // get from storage
        fiveSecs: false,
        addingRemoving: false,
        userMotivation: false,
    }

    setView = (view) => {
        this.setState({
            view
        })
    }

    render() {

        return (
            <div>
                <Tabs>
                    <h3 className={this.state.view === 'Validity' ? 'selected' : ''} onClick={() => this.setView('Validity')}>Validity</h3>
                    <h3 className={this.state.view === 'Evidence' ? 'selected' : ''} onClick={() => this.setView('Evidence')}>Evidence</h3>
                    <h3 className={this.state.view === 'Effort' ? 'selected' : ''} onClick={() => this.setView('Effort')}>Effort</h3>
                </Tabs>

                <FormArea className={this.state.view === 'Validity' ? 'visible ' : ''}>
                    <Toggle name="fold" label="Is your experiment above the fold?" />
                </FormArea>

                <FormArea className={this.state.view === 'Evidence' ? 'visible ' : ''}>
                    Evidence stuff
                </FormArea>

                <FormArea className={this.state.view === 'Effort' ? 'visible ' : ''}>
                    Effort stuff
                </FormArea>

            </div>
        );
    }
}

export default ExperimentForm;