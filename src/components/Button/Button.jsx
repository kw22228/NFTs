import React from 'react';
import * as s from './Button.style';

const Button = ({ text, onClickFunc, link, btnColor = 'dark' }) => {
    return (
        <>
            {link ? (
                <a href={link} aria-label={text} target="_blank" rel="noreferrer">
                    <s.Btn btnColor={btnColor}>{text}</s.Btn>
                </a>
            ) : (
                <s.Btn onClick={onClickFunc ? onClickFunc : null} btnColor={btnColor}>
                    {text}
                </s.Btn>
            )}
        </>
    );
};

export default Button;
