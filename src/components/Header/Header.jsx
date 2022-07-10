import React from 'react';
import { useState } from 'react';
import { useWindowScroll } from 'react-use';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import * as s from './Header.style';

const Header = () => {
    const [click, setClick] = useState(false);
    const { y } = useWindowScroll();

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

        setClick(false);
    };

    return (
        <s.Section scrolly={y}>
            <s.NavBar>
                <Logo />
                <s.HamburgurMenu click={click} onClick={() => setClick(prev => !prev)}>
                    &nbsp;
                </s.HamburgurMenu>
                <s.Menu click={click}>
                    <s.MenuItem onClick={() => scrollTo('#home')}>Home</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#about')}>About</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#roadmap')}>RoadMap</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#showcase')}>Showcase</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#team')}>Team</s.MenuItem>
                    <s.MenuItem onClick={() => scrollTo('#faq')}>Faq</s.MenuItem>
                    <s.MenuItem>
                        <div className="mobile">
                            <Button text="Connect Wallet" onClickFunc={onClickFunc} />
                        </div>
                    </s.MenuItem>
                </s.Menu>
                <div className="desktop">
                    <Button text="Connect Wallet" onClickFunc={onClickFunc} />
                </div>
            </s.NavBar>
        </s.Section>
    );
};

export default Header;
