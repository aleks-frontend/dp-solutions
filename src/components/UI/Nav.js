import React from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers';
import { AppContext } from '../../AppContext';

const NavWrapper = styled.div`
    display: flex;
`;

 const NavItem = styled.a`
    margin: 0 1rem;
    font-size: 1.6rem;
    color: ${props => props.active ? '#fff' : colors.indigo};
    text-decoration: none;
 `;

const Nav = () => {
    const context = React.useContext(AppContext);        

    return (
        <NavWrapper>
            {Object.keys(context.state.pages).map(pageId => {
                const page = context.state.pages[pageId];
                const isActive = context.state.activePage === pageId;
                return <NavItem 
                        key={pageId}
                        href={pageId} 
                        active={isActive}
                        onClick={(event) => context.setActivePage(pageId, event)}
                        >
                            {page.label}                        
                        </NavItem>;
            })}
        </NavWrapper>
    );
};

export default Nav;