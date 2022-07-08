import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import * as s from './Header.style';

const Header = () => {
    const onClickFunc = () => {
        console.log('meenting');
    };

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
            <s.NavBar>
                <Logo />
                <s.Menu>
                    <s.MenuItem onClick={() => scrollTo('#home')}>Home</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#about')}>About</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#roadmap')}>RoadMap</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#showcase')}>Showcase</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#team')}>Team</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#faq')}>Faq</s.MenuItem>
                </s.Menu>
                <Button text="Connect Wallet" onClickFunc={onClickFunc} />
            </s.NavBar>
        </s.Section>
    );
};

export default Header;
