import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const ReactConfetti = () => {
    const { width, height } = useWindowSize();
    return (
        <Confetti //
            numberOfPieces={200}
            gravity={0.03}
            width={width}
            height={height * 1.75}
        />
    );
};

export default ReactConfetti;
