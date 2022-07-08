import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import * as s from './Header.style';

const Header = () => {
    const [click, setClick] = useState(false);

    const onClickFunc = () => {
        // 여기에 지갑연동 구연하면댐.
        console.log('Connect Wallet');
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
                <s.HamburgurMenu click={click} onClick={() => setClick(prev => !prev)}>
                    &nbsp;
                </s.HamburgurMenu>
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
