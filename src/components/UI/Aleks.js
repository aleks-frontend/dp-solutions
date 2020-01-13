import React from 'react';
import styled from 'styled-components'

const AleksMain = styled.img`
    position: absolute;
    left: ${props => props.left ? props.left : '50%'};
    bottom: ${props => props.bottom ? props.bottom : '5.7rem'};
    width: 30rem;
    transform: translateX(-50%);
`;

const Aleks = (props) => (
    <AleksMain 
        src="/img/aleks.png" 
        left={props.left}
        bottom={props.bottom}
    />
);

export default Aleks;
