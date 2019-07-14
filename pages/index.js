import React from 'react';
import Page from '../components/Page';
import Goal from '../components/Goal';
import styled from 'styled-components';
import StyledCard from '../styles/StyledCard';

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
                
                <div>Experiments</div>


            </Container>
        </Page>
    );
};

export default index;