import styled from 'styled-components';
import { responsive } from '../../styles/variable';

export const Section = styled.section`
    width: 100vw;
    background-color: ${props => props.theme.body};
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 85%;
    height: ${props => props.theme.navHeight};
    margin: 0 auto;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    /* transition: all 0.3s ease; */

    @media (${responsive.res1}) {
        /* opacity: 0;
        visibility: hidden; */
        z-index: 100;
        position: fixed;
        top: ${props => props.theme.navHeight};
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0 auto;

        width: 100vw;
        height: ${props => `calc(100vh - ${props.theme.navHeight})`};
        background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
    }
`;

export const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${props => props.theme.text};
    cursor: pointer;

    &::after {
        content: ' ';
        display: block;
        width: 0;
        height: 2px;
        background: ${props => props.theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const HamburgurMenu = styled.span`
    width: 1.5rem;
    height: 2px;
    background-color: ${props => props.theme.text};

    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: ${props =>
        props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)'};

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 10;
    cursor: pointer;

    opacity: 0;
    visibility: hidden;

    transition: all 0.3s ease;

    &::after,
    &::before {
        content: ' ';
        width: ${props => (props.click ? '1rem' : '1.5rem')};
        height: 2px;
        background-color: ${props => props.theme.text};
        position: absolute;
        transform: all 0.3s ease;
        right: ${props => (props.click ? '-2px' : 0)};
    }

    &::after {
        top: ${props => (props.click ? '0.3rem' : '0.5rem')};
        transform: ${props => (props.click ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }

    &::before {
        bottom: ${props => (props.click ? '0.3rem' : '0.5rem')};
        transform: ${props => (props.click ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    @media (${responsive.res1}) {
        opacity: 1;
        visibility: visible;
    }
`;
