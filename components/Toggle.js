import React, { useState } from 'react';
import styled from 'styled-components';

const StyledToggle = styled.div`
    /* background: red; */
    width: 10rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    color: #fff;
    .yes {
        background: #eee;
    }
    .no {
        background: orange;
    }
    &.true {
        .yes {
            background: orange;
        }
        .no {
            background: #eee;
        }
    }
`;

const Toggle = ({ name, label, onChange, toggled }) => {
    // console.log({name});

    const toggleClass = toggled ? 'true' : 'false';
    return (
        <div>
            <p>{label}</p>
            <StyledToggle
                className={toggleClass}
                onClick={() => {
                    onChange(name);
                }}
            >
                <div className="yes">Yes</div>
                <div className="no">No</div>
            </StyledToggle>
        </div>
    );
};

export default Toggle;
