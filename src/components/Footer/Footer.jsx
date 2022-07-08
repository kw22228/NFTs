import React from 'react';
import * as s from './Footer.style';
import Banner from './Banner/Banner';
import Logo from '../Logo/Logo';
import Facebook from '../../Icons/Facebook';
import Instagram from '../../Icons/Instagram';
import LinkedIn from '../../Icons/LinkedIn';
import Twitter from '../../Icons/Twitter';

const Footer = () => {
    const scrollTo = id => {
        const element = document.querySelector(id);

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    return (
        <s.Section>
            <Banner />
            <s.Container>
                <s.Left>
                    <Logo />
                    <s.IconList>
                        <a href="http://facebook.com" target="_blank" rel="noreferrer">
                            <Facebook />
                        </a>
                        <a href="http://facebook.com" target="_blank" rel="noreferrer">
                            <Instagram />
                        </a>
                        <a href="http://facebook.com" target="_blank" rel="noreferrer">
                            <LinkedIn />
                        </a>
                        <a href="http://facebook.com" target="_blank" rel="noreferrer">
                            <Twitter />
                        </a>
                    </s.IconList>
                </s.Left>
                <s.MenuItems>
                    <s.Item onClick={() => scrollTo('#home')}>Home</s.Item>
                    <s.Item onClick={() => scrollTo('#about')}>About</s.Item>
                    <s.Item onClick={() => scrollTo('#roadmap')}>RoadMap</s.Item>
                    <s.Item onClick={() => scrollTo('#showcase')}>Showcase</s.Item>
                    <s.Item onClick={() => scrollTo('#team')}>Team</s.Item>
                    <s.Item onClick={() => scrollTo('#faq')}>Faq</s.Item>
                </s.MenuItems>
            </s.Container>
            <s.Bottom>
                {/* <span>&copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.</span> */}
                <span>
                    Made with &#10084; by{' '}
                    <a
                        href="https://github.com/kw22228"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'underline' }}
                    >
                        JW
                    </a>
                    .
                </span>
            </s.Bottom>
        </s.Section>
    );
};

export default Footer;
