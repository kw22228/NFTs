import styled, { keyframes } from 'styled-components';
import { responsive } from '../../../styles/variable';

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.text};
    overflow: hidden;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    & > *:first-child {
        animation-duration: 10s;

        @media (${responsive.res2}) {
            animation-duration: 15s;
        }
    }
    & > *:last-child {
        animation-duration: 15s;

        @media (${responsive.res2}) {
            animation-duration: 10s;
        }
    }
`;

const move = keyframes`
    0%{
        transform: translateX(110%);
    };

    100%{
        transform: translateX(-110%);
    }
`;
export const Row = styled.div`
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;

    display: flex;

    animation: ${move} linear infinite ${props => props.direction};
`;

export const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 1rem;
    background-color: ${props => props.theme.body};

    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
    }

    @media (${responsive.res2}) {
        width: 12rem;
    }
    @media (${responsive.res3}) {
        width: 10rem;
    }
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;

    background-color: ${props => props.theme.text};
    border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    span {
        font-size: ${props => props.theme.fontsm};
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.7)`};
        font-weight: 600;
        line-height: 1.5rem;
    }

    h1 {
        font-size: ${props => props.theme.fontmd};
        color: ${props => props.theme.body};
        font-weight: 600;
    }
`;

export const Price = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 1rem;
        height: auto;
    }
`;
