import React from 'react';
import styled from 'styled-components';
import Slider, { Range } from 'rc-slider';

type Props = {
    name: string;
    label: string;
    onChange: (name: string, value: number) => void;
    radioLabels: string[];
    value: number;
    vals: number[];
};

const StyledRadio = styled.div`
    text-align: center;
    color: #000;
    margin: 2rem;
    padding: 2rem;
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

const Slidr = ({ name, label, onChange, radioLabels, value, vals }: Props) => {
    const style: object = {};
    const valsObject: { [key: number]: { style: object; label: string } } = {};

    vals.forEach((v: number, i: number) => {
        valsObject[i] = { style, label: radioLabels[i] };
    });

    return (
        <StyledRadio>
            <p>{label}</p>
            <Slider
                min={0}
                max={vals.length - 1}
                marks={valsObject}
                step={1}
                dots
                value={value}
                onChange={(val: number) => onChange(name, val)}
            />
        </StyledRadio>
    );
};

export default Slidr;
