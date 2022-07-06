import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.text};

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const Row = styled.div`
    background-color: lightblue;
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;

    display: flex;

    div {
        width: 5rem;
        height: 5rem;
        margin: 2rem;
        padding: 2rem;

        background-color: yellow;
    }
`;
