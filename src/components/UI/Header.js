import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { zIndexes, colors, svgs } from '../../helpers';

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: ${props => props.minified ? 'center' : 'flex-end'};
    justify-content: center;
    padding-bottom: ${props => props.minified ? '0' : '1.4rem'};
    height: ${props => props.minified ? '7rem' : '14rem'};
    color: #fff;
    background: ${props => props.minified ? 'rgba(0,0,0, 0.8)' : 'transparent'};
    border-bottom: 0.1rem solid ${colors.neptune};
    z-index: ${zIndexes.header};
    transition: 0.3s all;
`;

const HeaderInner = styled.div`
    display: flex;
    align-items: ${props => props.minified ? 'center' : 'flex-end'};
    justify-content: space-between;
    width: 100%;
    max-width: 120rem;
`;

const HeaderLogo = styled.div`
    width: 16.6rem;
    height: ${props => props.minified ? '4.85rem' : '7.7rem'};
    transition: 0.3s all;

    svg {
        width: 100%;
        height: 100%;
        
        g#image {
            transform-origin: ${props => props.minified ? '51px 51px' : '102px 102px'};
            transform: ${props => props.minified ? 'rotate(360deg)' : 'rotate(0deg)'};
            transition: 0.4s all;
        }
        
        g#text {
            transform-origin: left bottom;
            transform: ${props => props.minified ? 'scale(0, 0)' : 'scale(1, 1)'};
            opacity: ${props => props.minified ? '0' : '1'};
            transition: 0.3s all;
        }
    }
`;

const Header = (props) => {
    const [state, setState] = React.useState({
        localHeaderMinified: false
    });

    React.useEffect(() => {
        setState({...state, localHeaderMinified: props.headerMinified});
    }, [props.headerMinified]);

    return (
        <HeaderWrapper minified={state.localHeaderMinified}>
            <HeaderInner minified={state.localHeaderMinified}>
                <HeaderLogo 
                    minified={state.localHeaderMinified} 
                    dangerouslySetInnerHTML={{ __html: svgs.logo }} 
                />
                <Nav activeNavItemState={props.activeNavItemState} />
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;
