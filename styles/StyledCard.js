import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: ${props => props.theme.greyLight};
    border-radius: 2px;
    ${props => props.theme.shadow1};
    margin: 1rem;
    padding: 2rem 2rem;
`;

export default StyledCard;
