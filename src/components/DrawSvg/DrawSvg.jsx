import React, { useLayoutEffect, useRef } from 'react';
import * as s from './DrawSvg.style';
import Vector from '../../Icons/Vector';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

const DrawSvg = () => {
    const ref = useRef(null);
    const ballRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let element = ref.current;

        let svg = document.querySelector('.svg-path');
        const length = svg.getTotalLength();

        // Start positioning of svg drawing
        svg.style.strokeDasharray = length;

        // Hide svg before scrolling start
        svg.style.strokeDashoffset = length;

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top-=20% top',
                end: 'bottom bottom',
                onUpdate: self => {
                    // Scroll 할 시,
                    const draw = length * self.progress;

                    // Also reverse the drawing when scroll goes up
                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: self => {
                    // Start of End
                    if (self.isActive) {
                        ballRef.current.style.display = 'none';
                    } else {
                        ballRef.current.style.display = 'inline-block';
                    }
                },
                markers: true,
            },
        });

        return () => {
            if (t1) t1.kill();
        };
    }, []);

    return (
        <>
            <s.Ball ref={ballRef} />
            <s.VectorContainer ref={ref}>
                <Vector />
            </s.VectorContainer>
        </>
    );
};

export default DrawSvg;
