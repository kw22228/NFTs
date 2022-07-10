import styled from 'styled-components';
import { responsive } from '../../../styles/variable';

export const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Container = styled.div`
    width: 75%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (${responsive.res1}) {
        width: 100%;
        flex-direction: column;

        & > *:last-child {
            width: 80%;
        }
    }

    @media (${responsive.res2}) {
        & > *:last-child {
            width: 90%;
        }
    }
`;

export const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (${responsive.res2}) {
        min-height: 50vh;
    }
`;

export const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${props => props.theme.body};
    align-self: flex-start;
    margin: 0 auto;

    @media (${responsive.res1}) {
        width: 100%;
        text-align: center;
        margin-top: 2rem;
    }
    @media (${responsive.res2}) {
        font-size: ${props => props.theme.fontlg};
    }
    @media (${responsive.res3}) {
        font-size: ${props => props.theme.fontxl};
    }
`;

export const SubText = styled.p`
    font-size: ${props => props.theme.fontlg};
    width: 80%;
    color: ${props => props.theme.body};
    align-self: flex-start;
    margin: 1rem auto;
    font-weight: 400;

    @media (${responsive.res1}) {
        width: 100%;
        text-align: center;
        margin-top: 2rem;
        font-size: ${props => props.theme.fontmd};
    }
    @media (${responsive.res3}) {
        font-size: ${props => props.theme.fontsm};
    }
`;

export const SubTextLight = styled.p`
    font-size: ${props => props.theme.fontmd};
    width: 80%;
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    align-self: flex-start;
    margin: 1rem auto;
    font-weight: 400;

    @media (${responsive.res1}) {
        width: 100%;
        text-align: center;
        margin-top: 2rem;
        font-size: ${props => props.theme.fontsm};
    }
    @media (${responsive.res3}) {
        font-size: ${props => props.theme.fontxs};
    }
`;

export const ButtonContainer = styled.div`
    width: 80%;
    margin: 1rem auto;
    display: flex;
    align-self: flex-start;

    @media (${responsive.res1}) {
        width: 100%;
        justify-content: center;
    }
`;
