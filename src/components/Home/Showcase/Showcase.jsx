import React from 'react';
import * as s from './Showcase.style';

import img1 from '../../../assets/Nfts/bighead-1.svg';
import img2 from '../../../assets/Nfts/bighead-2.svg';
import img3 from '../../../assets/Nfts/bighead-3.svg';
import img4 from '../../../assets/Nfts/bighead-4.svg';
import img5 from '../../../assets/Nfts/bighead-5.svg';
import img6 from '../../../assets/Nfts/bighead-6.svg';
import img7 from '../../../assets/Nfts/bighead-7.svg';
import img8 from '../../../assets/Nfts/bighead-8.svg';
import img9 from '../../../assets/Nfts/bighead-9.svg';
import img10 from '../../../assets/Nfts/bighead-10.svg';
import img11 from '../../../assets/Nfts/bighead-11.svg';

import ETH from '../../../assets/Ethereum.svg';
import { useRef } from 'react';

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
    const play = e => {
        passRef.current.style.animationPlayState = 'running';
    };
    const pause = e => {
        passRef.current.style.animationPlayState = 'paused';
    };

    return (
        <s.ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
            <img src={img} alt="The Weirods" />
            <s.Details>
                <div>
                    <span>Weirdos</span>
                    <br />
                    <h1>#{number}</h1>
                </div>

                <div>
                    <span>Price</span>
                    <s.Price>
                        <img src={ETH} alt="ETH" />
                        <h1>{Number(price).toFixed(1)}</h1>
                    </s.Price>
                </div>
            </s.Details>
        </s.ImgContainer>
    );
};
const Showcase = () => {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    return (
        <s.Section id="showcase">
            <s.Row direction="none" ref={row1Ref}>
                <NftItem img={img1} number={85} price={1.5} passRef={row1Ref} />
                <NftItem img={img2} number={123} price={1.2} passRef={row1Ref} />
                <NftItem img={img3} number={456} price={2.5} passRef={row1Ref} />
                <NftItem img={img4} number={666} price={3.5} passRef={row1Ref} />
                <NftItem img={img5} number={452} price={4.5} passRef={row1Ref} />
                <NftItem img={img6} number={332} price={7.5} passRef={row1Ref} />
            </s.Row>

            <s.Row direction="reverse" ref={row2Ref}>
                <NftItem img={img7} number={888} price={1.3} passRef={row2Ref} />
                <NftItem img={img8} number={211} price={0.5} passRef={row2Ref} />
                <NftItem img={img9} number={455} price={1.4} passRef={row2Ref} />
                <NftItem img={img10} number={456} price={1.3} passRef={row2Ref} />
                <NftItem img={img11} number={867} price={3.1} passRef={row2Ref} />
            </s.Row>
        </s.Section>
    );
};

export default Showcase;
