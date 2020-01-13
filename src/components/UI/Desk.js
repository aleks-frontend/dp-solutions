import React from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers';

const DeskMain = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20rem;
    width: 100%;
    background: ${colors.prairieSand};
`;

const Desk = () => (
    <DeskMain></DeskMain>
);

export default Desk;
