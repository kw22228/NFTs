import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import DrawSvg from '../../DrawSvg/DrawSvg';
import * as s from './RoadMap.style';

const RoadMapItem = ({ title, subText, addToRefs }) => {
    return (
        <s.Item ref={addToRefs}>
            <s.ItemContainer>
                <s.Box>
                    <s.SubTitle>{title}</s.SubTitle>
                    <s.Text>{subText}</s.Text>
                </s.Box>
            </s.ItemContainer>
        </s.Item>
    );
};
const RoadMap = () => {
    const revealRefs = useRef([]);
    revealRefs.current = [];

    gsap.registerPlugin(ScrollTrigger);

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        let t1 = gsap.timeline();
        revealRefs.current.forEach((el, index) => {
            //(타켓, 시작, 끝)
            t1.fromTo(
                el.childNodes[0],
                {
                    y: '0',
                },
                {
                    y: '-30%',
                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: 'top center+=100%',
                        end: 'bottom center',
                        scrub: true,
                        // markers: true,
                    },
                }
            );
        });
    });
    return (
        <s.Section id="roadmap">
            <s.Title>Roadmap</s.Title>
            <s.Container>
                <s.SvgContainer>
                    <DrawSvg />
                </s.SvgContainer>
                <s.Items>
                    <s.Item>&nbsp;</s.Item>
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title="Grand Opening"
                        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title="Great Benefits"
                        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title="Early Access"
                        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title="New Merch"
                        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
                    />
                    <RoadMapItem
                        addToRefs={addToRefs}
                        title="Holders Ranking"
                        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
                    />
                </s.Items>
            </s.Container>
        </s.Section>
    );
};

export default RoadMap;
