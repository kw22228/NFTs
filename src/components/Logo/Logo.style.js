import styled from 'styled-components';
import { responsive } from '../../styles/variable';

export const LogoText = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${props => props.theme.fontxxxl};
    color: ${props => props.theme.text};
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media (${responsive.res1}) {
        font-size: ${props => props.theme.fontxxl};
    }
`;
