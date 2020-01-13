import React from 'react';
import styled from 'styled-components';
import { svgs } from '../../helpers';

const BagWrapper = styled.a`
    position: absolute;
    left: ${props => props.left ? props.left : '0'};
    bottom: ${props => props.bottom ? props.bottom : '10rem'};

    &:hover .bagLabel {
        transform: rotate(-9deg) scale(1.1, 1.1);
    }

    &:hover .bagMain {
        svg {
            path#zipper { fill: black; }
            path#zipper-trigger { transform: translate(327px, -55px); }
        }
    }
`;

const BagShadow = styled.div`
    position: absolute;
    width: 22rem;
    top: 74%;
    right: 1%;

    svg { width: 100%; }
`;

const BagMain = styled.div`
    position: relative;
    width: 20rem;

    svg { 
        width: 100%; 

        path { transition: 0.3s all; }
    }
`;

const BagLabel = styled.div`
    position: absolute;
    top: 50%;
    left: 24%;
    font-size: 2.5rem;
    color: #fff;
    text-transform: uppercase;
    transform: rotate(-9deg) scale(1, 1);
    font-weight: 700;
    transition: 0.3s all;
`;

const Bag = (props) => (
    <BagWrapper 
        left={props.left}
        bottom={props.bottom}
        href="#"
    >
        <BagShadow dangerouslySetInnerHTML={{ __html: svgs.bagShadow }} />
        <BagMain className="bagMain" dangerouslySetInnerHTML={{ __html: svgs.bag }} />
        <BagLabel className="bagLabel">Portfolio</BagLabel>
    </BagWrapper>
);

export default Bag;