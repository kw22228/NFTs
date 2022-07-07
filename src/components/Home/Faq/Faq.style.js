import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.body};

    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.carouselColor};
    width: fit-content;
`;

export const Container = styled.div`
    width: 75%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Box = styled.div`
    width: 45%;
`;
