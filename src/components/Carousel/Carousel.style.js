import styled from 'styled-components';
import Arrow from '../../assets/Arrow.svg';

export const Container = styled.div`
    width: 25vw;
    height: 70vh;

    .swiper {
        width: 100%;
        height: 100%;
        color: black;
    }

    .swiper-slide {
        background-color: ${props => props.theme.carouselColor};
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-button-next {
        color: ${props => props.theme.text};
        right: 0;
        width: 4rem;
        top: 60%;

        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        &:after {
            display: none;
        }
    }

    .swiper-button-prev {
        color: ${props => props.theme.text};
        right: 0;
        width: 4rem;
        top: 60%;

        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        transform: rotate(180deg);
        &:after {
            display: none;
        }
    }
`;
