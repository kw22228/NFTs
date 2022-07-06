import React from 'react';
import * as s from './Button.style';

const Button = ({ text, onClickFunc, link }) => {
    return (
        <s.Btn //
            onClick={onClickFunc ? onClickFunc : null}
        >
            {link ? (
                <a href={link} aria-label={text} target="_blank" rel="noreferrer">
                    {text}
                </a>
            ) : (
                text
            )}
        </s.Btn>
    );
};

export default Button;
