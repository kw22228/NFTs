import styled from 'styled-components';

export const Up = styled.div`
    box-sizing: border-box;
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    color: ${props => props.theme.body};
    background-color: violet;

    font-size: ${props => props.theme.fontxl};
    position: fixed;
    right: 1rem;
    bottom: 1rem;

    cursor: pointer;

    opacity: ${props => (props.scroller > 300 ? 1 : 0)};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.2);
    }

    &:active {
        transform: scale(0.9);
    }
`;
