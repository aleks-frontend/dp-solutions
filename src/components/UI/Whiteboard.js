import React from 'react';
import styled from 'styled-components';

const WhiteboardWrapper = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => `rotate(${props.rotation}deg)`};
`;

const WhiteboardShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 97%;
    bottom: 1.7rem;
    right: ${props => props.shadowHorPosition};
    background: rgba(0,0,0, 0.3);
`;

const WhiteboardMain = styled.img`
    position: relative;
    width: 43rem;
    height: auto;
`;

const Whiteboard = (props) => (
    <WhiteboardWrapper top={props.top} left={props.left} rotation={props.rotation}>
        <WhiteboardShadow shadowHorPosition={props.shadowHorPosition} />
        <WhiteboardMain src="img/whiteboard.svg" alt="Whiteboard" />
    </WhiteboardWrapper>
);

export default Whiteboard;