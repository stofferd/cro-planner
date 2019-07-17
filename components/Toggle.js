import React, {useState} from 'react';
import styled from 'styled-components';

const StyledToggle = styled.div`
    background: red;
    width: 10rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    .yes {
        background: grey;
    }
    .no {
        background: orange;
    }
    &.true {
        .yes {
            background: orange;
        }
        .no {
            background: grey;
        }
    }
`;

const Toggle = ({name, label, defaultVal}) => {

    const [onOrOff, toggle] = useState(defaultVal);
    const toggleClass = onOrOff ? 'true' : 'false'
    return (
        <div>
            <p>{label}</p>
            <StyledToggle className={toggleClass} onClick={() => toggle(!onOrOff)}>
                <div className="yes">Yes</div><div className="no">No</div>
            </StyledToggle>
        </div>
    );
};

export default Toggle;

