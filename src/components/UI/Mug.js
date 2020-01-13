import React from 'react';
import styled from 'styled-components';
import { svgs } from '../../helpers';

const MugMain = styled.div`
    position: absolute;
    left: ${props => props.left ? props.left : '20rem'};
    bottom: ${props => props.bottom ? props.bottom : '0.5rem'};
    width: 12rem;
`;

const Mug = (props) => (
    <MugMain 
        bottom={props.bottom}
        left={props.left}
        dangerouslySetInnerHTML={{ __html: svgs.mug }} 
    />
);

export default Mug;
