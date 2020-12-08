import React from 'react';
import styled from 'styled-components';

const DeskBottomMain = styled.div`
    position: absolute;
    width: 100%;
    height: 3rem;
    background: url('img/desk-bottom.png') no-repeat;
    background-size: 100% 100%;
`;

const DeskBottom = () => (
    <DeskBottomMain />
);

export default DeskBottom;