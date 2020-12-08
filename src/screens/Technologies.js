import React from 'react';
import styled from 'styled-components';
import { pageEnums ,colors } from '../helpers';
import Factory from '../components/UI/Factory';
import TechFireworks from '../components/UI/TechFireworks';

const TechnologiesWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 100vh;
    background: linear-gradient(180deg,rgba(135,213,247,1) 0%,rgba(255,255,255,1) 100%);
`;

const TechnologiesInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 120rem;
`;

const TechnologiesMain = styled.div`
    max-width: 60rem;
`;

const TechnologiesHeading = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${colors.indigo};
`;

const TechnologiesContent = styled.div`
    padding: 2rem 10rem 10rem 3rem;
    font-size: 1.5rem;
    line-height: 1.2em;
    background: #fff;
    border-radius: 0.5rem;
`;

const Technologies = (props) => {
    const wrapperRef = React.useRef();
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                props.setActiveNavItem(pageEnums.TECHNOLOGIES);
            }
        })
    }, { threshold: 0.8 })

    React.useEffect(() => {
        observer.observe(wrapperRef.current);
    }, []);        
    
    return (
        <TechnologiesWrapper ref={wrapperRef}>
            {/* <Bubbles /> */}
            <Factory />
            <TechFireworks />
            <TechnologiesInner>
                <TechnologiesMain>
                    <TechnologiesHeading>Technologies</TechnologiesHeading>
                    <TechnologiesContent>
                        <p>Aenean ut eros et nisl sagittis vestibulum. Nullam cursus lacinia erat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. In auctor lobortis lacus. Curabitur suscipit suscipit tellus.</p>
                        <p>Curabitur vestibulum aliquam leo. Aliquam eu nunc. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Morbi mattis ullamcorper velit. Morbi ac felis. </p>
                    </TechnologiesContent>
                </TechnologiesMain>
            </TechnologiesInner>
        </TechnologiesWrapper>
    );
};

export default Technologies;
