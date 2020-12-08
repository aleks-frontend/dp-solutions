import React from 'react';
import styled from 'styled-components';
import { svgs } from '../../helpers';

const FactoryMain = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100rem;
    height: 50rem;
    background: url('img/factory.png') no-repeat bottom left;
    background-size: contain;
`;

const FactoryWheel = styled.div`
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    width: ${props => {
        switch (props.size) {
            case 'mid':
                return '15rem';
            case 'big':
                return '16rem';
            case 'small':
                return '11rem'
            default:
                return '11rem';
        }
    }};
    height: ${props => {
        switch (props.size) {
            case 'mid':
                return '15rem';
            case 'big':
                return '16rem';
            case 'small':
                return '11rem'
            default:
                return '11rem';
        }
    }};

    @keyframes rotateWheel {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    @keyframes rotateWheelCounter {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
    }    

    svg, img { 
        width: 100%; 
        animation-name: rotateWheel;
        animation-duration: ${props => props.animationDuration ? props.animationDuration : '4s'}; 
        animation-timing-function: linear;
        animation-direction: ${props => props.animationDirection ? props.animationDirection : 'normal'};
        animation-iteration-count: infinite;
    }
`;

const Factory = () => {
    return (
        <FactoryMain>
            <FactoryWheel
                size="mid"
                left="10rem"
                top="20rem"
                animationDuration="3s"
            // dangerouslySetInnerHTML={{ __html: svgs.wheels.mid }}
            >
                <img src="img/wheel-mid.png" />
            </FactoryWheel>
            <FactoryWheel
                size="big"
                left="23.5rem"
                top="15rem"
                animationDirection="reverse"
            // dangerouslySetInnerHTML={{ __html: svgs.wheels.big }}
            >
                <img src="img/wheel-big.png" />
            </FactoryWheel>
            <FactoryWheel
                size="small"
                left="30rem"
                top="30rem"
                animationDuration="2.5s"
            // dangerouslySetInnerHTML={{ __html: svgs.wheels.small }}
            >
                <img src="img/wheel-small.png" />
            </FactoryWheel>
        </FactoryMain>
    );
};

export default Factory;
