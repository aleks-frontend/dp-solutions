import React from 'react';
import styled from 'styled-components';
import { svgs } from '../../helpers';

const PhoneWrapper = styled.a`
    position: absolute;
    right: ${props => props.right ? props.right : '10rem' };
    bottom: ${props => props.bottom ? props.bottom : '5rem' };

    &:hover .phoneLabel {
        opacity: 1;
        transform: rotate(-16deg) scale(1.1);
    }
`;

const PhoneMain = styled.div`
    width: 20rem;
`;

const PhoneLabel = styled.div`
    position: absolute;
    left: 15%;
    top: 15%;
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    opacity: 0.7;
    transform: rotate(-16deg) scale(1);
    transition: 0.3s all;
`;

const Phone = () => (
    <PhoneWrapper href="#">
        <PhoneMain dangerouslySetInnerHTML={{ __html: svgs.phone }} />
        <PhoneLabel className="phoneLabel">Contact</PhoneLabel>
    </PhoneWrapper>
);

export default Phone;