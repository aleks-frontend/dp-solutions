import React from 'react';
import styled from 'styled-components';
import DeskBottom from '../components/UI/DeskBottom';
import { pageEnums } from '../helpers';

const AboutMeWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(180deg,rgba(127,193,189,1) 0%,rgba(64,85,164,1) 100%);
`;

const AboutMeInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    max-width: 120rem;
`;

const AboutMePhoto = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60rem;
    max-width: 30%;
    height: 60rem;
    background: url('img/family.png') bottom left no-repeat;
    background-size: contain;
`;

const AboutMeContent = styled.div`
    flex: 1;
    padding: 3rem 10rem 10rem 3rem;
    min-height: 30rem;
    font-size: 1.5rem;
    line-height: 1.2em;
    background: #fff;
    border-radius: 0.5rem;
`;

const AboutMeHeading = styled.h1`
    font-size: 3rem;
`;

const AboutMe = (props) => {
    const innerRef = React.useRef();
    const photoRef = React.useRef();

    const wrapperRef = React.useRef();
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                props.setActiveNavItem(pageEnums.ABOUTME);
            }
        })
    }, { threshold: 0.8 })

    React.useEffect(() => {
        observer.observe(wrapperRef.current);
    }, []);    

    React.useEffect(() => {
        // Logic for dynamically setting the left padding of the content section in order to 
        // create room for the desk image in the bottom corner
        const innerWidth = innerRef.current.offsetWidth;
        const photoWidth = photoRef.current.offsetWidth;
        const windowWidth = window.innerWidth;

        const leftPadding = ( ( windowWidth - innerWidth ) / 2 ) - photoWidth;

        if ( leftPadding < 0 ) innerRef.current.style.paddingLeft = `${-leftPadding}px`;
    }, []);
    return (
        <AboutMeWrapper ref={wrapperRef}>
            <DeskBottom />
            <AboutMePhoto ref={photoRef} />
            <AboutMeInner ref={innerRef}>
                <AboutMeContent>
                    <AboutMeHeading>About me</AboutMeHeading>
                    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Donec posuere vulputate arcu. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Nunc nulla.</p>
                    <p>Pellentesque dapibus hendrerit tortor. Phasellus gravida semper nisi. Morbi nec metus. Cras non dolor. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Donec posuere vulputate arcu. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Nunc nulla.</p>
                    <p>Pellentesque dapibus hendrerit tortor. Phasellus gravida semper nisi. Morbi nec metus. Cras non dolor. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                </AboutMeContent>
            </AboutMeInner>
        </AboutMeWrapper>
    )
}

export default AboutMe;
