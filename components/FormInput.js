import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    color: ${props => props.theme.green};
    text-transform: uppercase;
    input {
        display: block;
        border: 0;
        background: transparent;
        &:focus {
            outline: 0;
            border: 0;
        }
    }
`;


const FormInput = ({onChange, name, niceName, value, placeholder, type}) => {

    const inputType = type ? type : "text";
    return (
        <Label htmlFor={name}>{niceName}
            <input type={inputType} onChange={onChange} name={name} id={name} value={value} placeholder={placeholder} />
        </Label>
    );
};

export default FormInput;