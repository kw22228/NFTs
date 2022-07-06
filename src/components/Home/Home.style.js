import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
    min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    width: 100vw;
    position: relative;
    background-color: ${props => props.theme.body};
`;

export const Container = styled.div`
    width: 75%;
    min-height: 80vh;
    margin: 0 auto;
    /* background-color: lightblue; */

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${props => props.theme.text};
    align-self: flex-start;

    span {
        text-transform: uppercase;
        font-family: 'Akaya Telivigala', cursive;
    }

    .text-1 {
        color: blue;
    }
    .text-2 {
        color: orange;
    }
    .text-3 {
        color: red;
    }
`;

export const SubTitle = styled.h3`
    font-size: ${props => props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;
`;

export const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;
`;

export const VideoContainer = styled.div`
    width: 100%;

    video {
        width: 100%;
        height: auto;
    }
`;

const rotate = keyframes`
    100%{
        transform: rotate(360deg);
    }
`;
export const Round = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 90%;
    width: 6rem;
    height: 6rem;
    border: 1px solid ${props => props.theme.text};
    border-radius: 50%;

    img {
        width: 100%;
        height: auto;

        animation: ${rotate} 6s linear infinite reverse;
    }
`;

export const Circle = styled.span`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    font-size: ${props => props.theme.fontxl};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
