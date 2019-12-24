import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14rem;
    color: #fff;
    background: rebeccapurple;
`;

const Header = () => {
    return (
        <StyledHeader>Test</StyledHeader>
    );
};

export default Header;
