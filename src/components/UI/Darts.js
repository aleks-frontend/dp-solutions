import React from 'react';
import styled from 'styled-components';

import { svgs } from '../../helpers';

const DartsWrapper = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => `rotate(${props.rotation}deg)`};
`;

const DartsShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: .5rem;
    right: -0.8rem;
    background: url(/img/darts-shadow.png) no-repeat;
    background-size: contain;
`;

const DartsMain = styled.div`
    position: relative;
    width: 18rem;
    height: auto;

    svg { max-width: 100%; }

    @keyframes toggleRedGreen {
        0% {fill: #802F36;}
        50% {fill: #000;}
        75% {fill: #802F36;}
        100% {fill: #802F36;}
    }    

    @keyframes toggleGreenRed {
        0% {fill: #317B59;}
        50% {fill: #000;}
        75% {fill: #317B59;}
        100% {fill: #317B59;}
    }

    @keyframes toggleDigit {
        0% {opacity: 0;}
        5% {opacity: 1;}
        7% {opacity: 1;}
        15% {opacity: 0;}
        100% {opacity: 0;}
    }

    path[id^="red"] { 
        animation-name: toggleRedGreen;
        animation-duration: 3s;
        animation-delay: 0.5s;
        animation-iteration-count: infinite;
    }

    path[id^="green"] {
        animation-name: toggleGreenRed;
        animation-duration: 3s;
        animation-iteration-count: infinite;        
    }    

    g[id$="-digit"] { opacity: 0; }

    #h-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-iteration-count: infinite;
    }

    #e-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-delay: 2s;
        animation-iteration-count: infinite;
    }

    #l-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-delay: 4s;
        animation-iteration-count: infinite;
    }

    #o-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-delay: 6s;
        animation-iteration-count: infinite;
    }

    #w-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-delay: 9s;
        animation-iteration-count: infinite;
    }

    #o2-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-delay: 11s;
        animation-iteration-count: infinite;
    }

    #r-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-delay: 13s;
        animation-iteration-count: infinite;
    }

    #l2-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-delay: 15s;
        animation-iteration-count: infinite;
    }

    #d-digit { 
        animation-name: toggleDigit;
        animation-duration: 20s;
        animation-delay: 17s;
        animation-iteration-count: infinite;
    }
`;

const DartsHole = styled.div`
    position: absolute;
    bottom: -2rem;
    left: 2rem;
    width: 2rem;
    height: 2rem;
`;

const Darts = (props) => {
    return (
        <DartsWrapper left={props.left} top={props.top}>
            <DartsShadow />
            <DartsMain dangerouslySetInnerHTML={{ __html: svgs.dartBoard }} />
            <DartsHole />
        </DartsWrapper>
    );
}

export default Darts;