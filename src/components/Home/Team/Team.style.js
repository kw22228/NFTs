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
    width: 75vw;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    width: calc(20rem - 5vw);
    padding: 1rem 0;
    color: ${props => props.theme.body};
    margin: 2rem 1rem;
    position: relative;

    backdrop-filter: blur(4px);
    z-index: 5;

    border: 2px solid ${props => props.theme.text};
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
        img {
            transform: translateY(-1.5rem) scale(1.1);
        }
    }
`;

export const ImgContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: ${props => props.theme.carouselColor};

    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    padding: 1rem;

    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        transition: all 0.3s ease;
    }
`;

export const Name = styled.h2`
    font-size: ${props => props.theme.fontlg};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    margin-top: 1rem;
`;

export const Position = styled.h2`
    font-size: ${props => props.theme.fontmd};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.8)`};
    font-weight: 400;
`;
