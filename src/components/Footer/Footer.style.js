import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};

    position: relative;

    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${props => props.theme.text};
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IconList = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto;

    & > * {
        padding-right: 0.5rem;
        transform: all 0.2s ease;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const MenuItems = styled.ul`
    list-style: none;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
`;

export const Item = styled.li`
    width: fit-content;
    cursor: pointer;

    &::after {
        content: ' ';
        display: block;
        width: 0;
        height: 2px;
        background-color: ${props => props.theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const Bottom = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
