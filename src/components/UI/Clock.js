import React from 'react';
import styled from 'styled-components';

const ClockWrapper = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`;

const ClockShadow = styled.div`
    position: absolute;
    left: ${props => props.shadowHorPosition};
    top: -0.5rem;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.2);
    border-radius: 50%;
    z-index: 1;
`;

const ClockMain = styled.div`
  position: relative;
  width: 11rem;
  height: 11rem;
  background-image: ${props => {
        if (props.country === 'usa') {
            return 'url(img/clock-bg-usa.png)';
        } else if (props.country === 'au') {
            return 'url(img/clock-bg-au.png)';
        } else {
            return 'url(img/clock-bg-md.png)';
        }
    }};
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 2;
`;

const ClockInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform: scale(0.75);
    z-index: 2;
`;

const ClockCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    background: black;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

const ClockHand = styled.div`
    display: ${props => props.ready ? 'block' : 'none'};
    width: ${props => props.hoursHand ? '35%' : '50%'};
    height: ${props => props.secondsHand ? '0.1rem' : '0.6rem'};
    background: black;
    position: absolute;
    top: 50%;
    right: 50%;
    background: ${props => props.secondsHand ? 'red' : 'url(img/clock-hand.png)'};
    background-size: 100% 100%;
    transform-origin: 100%;
`;

const Clock = (props) => {
    const [state, setState] = React.useState({
        ready: false
    });

    const secondHandRef = React.useRef();
    const minuteHandRef = React.useRef();
    const hourHandRef = React.useRef();

    const setTime = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        let hours = now.getHours() + Number(props.timeDifference);

        const secondDegrees = ((seconds / 60) * 360) + 90;
        const minuteDegrees = ((minutes / 60) * 360) + 90;

        if (hours > 24) hours = hours - 24;
        if (hours > 12) hours = hours - 12;
        const hourDegrees = ((hours / 12) * 360) + 90;

        secondHandRef.current.style.transform = `rotate(${secondDegrees}deg)`;
        minuteHandRef.current.style.transform = `rotate(${minuteDegrees}deg)`;
        hourHandRef.current.style.transform = `rotate(${hourDegrees}deg)`;

        if (state.ready) return;
        setState({
            ...state,
            ready: true
        })
    }

    setInterval(() => {
        setTime();
    }, 1000);

    return (
        <ClockWrapper top={props.top} left={props.left}>
            <ClockShadow shadowHorPosition={props.shadowHorPosition} />
            <ClockMain country={props.country}>
                <ClockInner>
                    <ClockCenter />
                    <ClockHand ready={state.ready} ref={secondHandRef} secondsHand={true} />
                    <ClockHand ready={state.ready} ref={minuteHandRef}  />
                    <ClockHand ready={state.ready} ref={hourHandRef} hoursHand={true} />
                </ClockInner>
            </ClockMain>
        </ClockWrapper>
    );
};

export default Clock;
