import React from 'react';
import styled from 'styled-components';

const StyledRadio = styled.div`
    /* background: red; */
    /* width: 10rem; */
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
    text-align: center;
    color: #fff;
    button {
        background: #eee;
        appearance: none;
        background: #ccc;
        display: block;
        &.active {
            background: orange;
        }
    }
`;

const Radio = ({ name, label, onChange, radioLabels, value, vals }) => {
    const setVal = val => {
        // pass the button value to onChange function
        onChange(name, val);
    };
    return (
        <div>
            <p>{label}</p>
            <StyledRadio
            // onClick={() => {
            // onChange(name, value ? vals[0] : vals[1]);
            // }}
            >
                {vals.map(val => {
                    return (
                        <button
                            key={val}
                            className={val === value ? 'active' : ''}
                            onClick={() => setVal(val)}
                        >
                            {radioLabels[val]}
                        </button>
                    );
                })}
            </StyledRadio>
        </div>
    );
};

export default Radio;
