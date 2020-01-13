import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers';

const WhiteboardWrapper = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => `rotate(${props.rotation}deg)`};
    user-select: none;
`;

const WhiteboardCanvas = styled.canvas`
    position: absolute;
    top: 2rem;
    left: 2.6rem;
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

const Whiteboard = (props) => {
    const [state, setState] = React.useState({
        ready: false
    });

    React.useEffect(() => {
        setState({...state, ready: true});
    }, []);
    
    const canvasRef = React.useRef();
    const whiteboardRef = React.useRef();
    
    if ( state.ready ) {
        const whiteboardWidth = whiteboardRef.current.width - 45;
        const whiteboardHeight = whiteboardRef.current.outerHeight; // for some reason not working - do more research
        const canvas = canvasRef.current;
        canvas.width = whiteboardWidth;
        canvas.height = 250;
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = colors.indigo;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 10;

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        function draw(e) {
            if ( !isDrawing ) return;            
            
            ctx.beginPath();
            // start from
            ctx.moveTo(lastX, lastY);
            // go to
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            lastX = e.offsetX;
            lastY = e.offsetY;
        }

        // Disabling draw functionality for the time being
        // canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            lastX = e.offsetX;
            lastY = e.offsetY;
        });
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);
    }

    return (
        <WhiteboardWrapper top={props.top} left={props.left} rotation={props.rotation}>
            <WhiteboardShadow shadowHorPosition={props.shadowHorPosition} />
            <WhiteboardMain src="img/whiteboard.svg" alt="Whiteboard" ref={whiteboardRef} />
            <WhiteboardCanvas ref={canvasRef} />
        </WhiteboardWrapper>
    );
}

export default Whiteboard;
