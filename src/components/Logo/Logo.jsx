import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './Logo.style';

const Logo = () => {
    return (
        <>
            <s.LogoText>
                <Link to="/">JW.</Link>
            </s.LogoText>
        </>
    );
};

export default Logo;
