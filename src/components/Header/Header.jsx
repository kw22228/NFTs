import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import * as s from './Header.style';

const Header = () => {
    const onClickFunc = () => {
        console.log('meenting');
    };

    return (
        <s.Section>
            <s.NavBar>
                <Logo />
                <s.Menu>
                    <s.MenuItem>Home</s.MenuItem>
                    <s.MenuItem>About</s.MenuItem>
                    <s.MenuItem>RoadMap</s.MenuItem>
                    <s.MenuItem>Showcase</s.MenuItem>
                    <s.MenuItem>Team</s.MenuItem>
                    <s.MenuItem>Faq</s.MenuItem>
                </s.Menu>
                <Button text="Connect Wallet" onClickFunc={onClickFunc} />
            </s.NavBar>
        </s.Section>
    );
};

export default Header;
