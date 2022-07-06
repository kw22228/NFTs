import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriterText = ({ typeTextArr }) => {
    return (
        <>
            {typeTextArr && (
                <Typewriter
                    onInit={typewriter => {
                        typewriter.start();
                    }}
                    options={{
                        strings: typeTextArr,
                        autoStart: true,
                        loop: true,
                        pauseFor: 1500,
                    }}
                />
            )}
        </>
    );
};

export default TypeWriterText;
