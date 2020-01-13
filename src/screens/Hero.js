import React from 'react';
import styled from 'styled-components';
import Clock from '../components/Clock';
import Photo from '../components/UI/Photo';
import Whiteboard from '../components/UI/Whiteboard';
import Darts from '../components/UI/Darts';
import Desk from '../components/UI/Desk';
import Bag from '../components/UI/Bag';
import Mug from '../components/UI/Mug';
import Phone from '../components/UI/Phone';
import Aleks from '../components/UI/Aleks';

const HeroWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(25, 35, 38, 1) 0%, rgba(32, 153, 212, 1) 100%);
`;

const HeroTop = styled.div`
    position: relative;
    padding-top: 16rem;
    width: 100%;
    max-width: 120rem;
`;

const HeroBottom = styled.div`
    position: relative;
    width: 100%;
`;

const HeroInner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 120rem;
`;

const Hero = (props) => {
    const forwardedRef = props.forwardedRef; /* This is for setting up the intersection observer */

    return (
        <HeroWrapper id={props.id} ref={forwardedRef}>
            <HeroTop>
                <Clock
                    shadowHorPosition="-0.5rem"
                    country="usa"
                    timeDifference="5"
                    top="25rem"
                    left="20rem"
                />
                <Clock
                    shadowHorPosition="0"
                    country="md"
                    timeDifference="10"
                    top="25rem"
                    left="34rem"                    
                />
                <Clock 
                    shadowHorPosition="0.5rem" 
                    country="au" 
                    timeDifference="3" 
                    top="37rem"
                    left="26rem"
                />
                <Photo 
                    top="35rem" 
                    left="5rem" 
                    rotation="-5" 
                />
                <Whiteboard 
                    top="22rem" 
                    left="50rem" 
                    rotation="1" 
                    shadowHorPosition="-0.5rem"
                />
                <Darts 
                    top="28rem" 
                    left="100rem" 
                    rotation="-2" 
                    shadowHorPosition="-0.5rem"
                />
            </HeroTop>
            <HeroBottom>
                <Desk />
                <Aleks />
                <HeroInner>
                    <Bag left="0" bottom="10rem" />
                    <Mug left="23rem" bottom="8rem" />
                    <Phone right="23rem" bottom="8rem" />
                </HeroInner>
            </HeroBottom>
        </HeroWrapper>
    );
};

export default Hero;
