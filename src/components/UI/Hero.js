import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';

const HeroWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(25, 35, 38, 1) 0%, rgba(32, 153, 212, 1) 100%);
`;

const Hero = (props) => {
    const forwardedRef = props.forwardedRef; /* This is for setting up the intersection observer */

    return (
        <HeroWrapper id={props.id} ref={forwardedRef}>
            <Clock shadowLeftPosition="-0.5rem" country="usa" timeDifference="5" />
            <Clock shadowLeftPosition="0" country="md" timeDifference="10" />
            <Clock shadowLeftPosition="0.5rem" country="au" timeDifference="3" />
        </HeroWrapper>
    );
};

export default Hero;