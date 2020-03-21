import React from 'react';
import styled from 'styled-components';

type Props = {
    name: string;
    label: string;
    onChange: (name: string, value: number) => void;
    radioLabels: string[];
    value: 0 | 1 | 2 | 3;
    vals: number[];
};

const StyledRadio = styled.div`
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

const Radio = ({ name, label, onChange, radioLabels, value, vals }: Props) => {
    const setVal = (val: number) => {
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
