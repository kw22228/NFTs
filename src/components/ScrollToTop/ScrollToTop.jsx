import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useWindowScroll } from 'react-use';
import * as s from './ScrollToTop.style';

const ScrollToTop = () => {
    const { y } = useWindowScroll();

    const scrollTo = () => {
        const element = document.querySelector('#home');

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    return (
        <s.Up scroller={y} onClick={scrollTo}>
            &#x2191;
        </s.Up>
    );
};

export default ScrollToTop;
