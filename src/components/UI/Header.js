import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { zIndexes, colors } from '../../helpers';

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 1.4rem;
    height: 14rem;
    color: #fff;
    border-bottom: 0.1rem solid ${colors.neptune};
    z-index: ${zIndexes.header};
`;

const HeaderInner = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    max-width: 120rem;
`;

const HeaderLogo = styled.img`
    max-width: 16.6rem;
    max-height: 7.7rem;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <HeaderLogo src="img/dp-logo.svg" />
                <Nav />
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;
