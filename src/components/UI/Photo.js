import React from 'react';
import styled from 'styled-components';

const PhotoWrapper = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => `rotate(${props.rotation}deg)`};
`;

const PhotoMain = styled.img`
    position: relative;
    width: 13rem;
    height: auto;
`;

const PhotoShadow = styled.div`
    position: absolute;
    width: 102%;
    height: 102%;
    bottom: 0.5rem;
    right: 0.5rem;
    background: rgba(0,0,0, 0.3);
`;

const Photo = (props) => (
    <PhotoWrapper 
        top={props.top} 
        left={props.left} 
        rotation={props.rotation}
    >
        <PhotoShadow />
        <PhotoMain src="img/about-me-photo.png" alt="family" />
    </PhotoWrapper>
);

export default Photo;