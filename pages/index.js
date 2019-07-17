import React from 'react';
import Page from '../components/Page';
import Goal from '../components/Goal';
import styled from 'styled-components';
import StyledCard from '../styles/StyledCard';
import ExperimentList from '../components/ExperimentList';



const Container = styled.div`
    max-width: 800px;
    margin: auto;
`;

const index = () => {
    return (
        <Page title="Home">
        
                <Container>
                    <StyledCard>
                        <Goal />
                    </StyledCard>
                    
                    <ExperimentList />

                </Container>
            
        </Page>
    );
};

export default index;