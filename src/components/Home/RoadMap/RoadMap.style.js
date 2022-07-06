import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.text};
    width: fit-content;
`;

export const Container = styled.div`
    width: 70%;
    height: 200vh;
    background-color: ${props => props.theme.body};
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Items = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *:nth-of-type(2n + 1) {
        justify-content: start;

        div,
        p {
            border-radius: 50px 0 50px 0;
            text-align: right;
        }
    }

    & > *:nth-of-type(2n) {
        justify-content: end;

        div,
        p {
            border-radius: 0 50px 0 50px;
            text-align: left;
        }
    }
`;

export const Item = styled.li`
    width: 100%;
    height: 100%;

    display: flex;
`;

export const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid ${props => props.theme.text};
`;

export const Box = styled.div`
    height: fit-content;
    background-color: ${props => props.theme.carouselColor};
    color: ${props => props.theme.text};
    padding: 1rem;
    position: relative;
    border: 1px solid ${props => props.theme.Text};
`;

export const SubTitle = styled.span`
    display: block;
    font-size: ${props => props.theme.fontxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
`;
export const Text = styled.span`
    display: block;
    font-size: ${props => props.theme.fontsm};
    text-transform: capitalize;
    color: ${props => props.theme.text};

    font-weight: 400;
    margin: 0.5rem auto;
`;
