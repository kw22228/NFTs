import { PropTween } from 'gsap/gsap-core';
import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 25rem;
    position: relative;
    border-top: 2px solid ${props => props.theme.text};

    background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
`;

export const ImgContainer = styled.div`
    width: 100%;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;

    img {
        width: 15rem;
        height: auto;
    }
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    color: ${props => props.theme.body};
    z-index: 10;
    width: 35%;

    text-transform: capitalize;
    text-shadow: 1px 1px 2px ${props => props.theme.body};
`;

export const BtnContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-end;

    font-size: ${props => props.theme.fontlg};
`;
