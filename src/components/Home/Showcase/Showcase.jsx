import React from 'react';
import * as s from './Showcase.style';
import importAll from '../../../utils/importAll';

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

const NftItem = ({ img, number = 0, price = 0 }) => {
    return (
        <s.ImgContainer>
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
    return (
        <s.Section>
            <s.Row direction="none">
                <NftItem img={img1} number={85} price={1.5} />
                <NftItem img={img2} number={123} price={1.2} />
                <NftItem img={img3} number={456} price={2.5} />
                <NftItem img={img4} number={666} price={3.5} />
                <NftItem img={img5} number={452} price={4.5} />
                <NftItem img={img6} number={332} price={7.5} />
            </s.Row>

            <s.Row direction="reverse">
                <NftItem img={img7} number={888} price={1.3} />
                <NftItem img={img8} number={211} price={0.5} />
                <NftItem img={img9} number={455} price={1.4} />
                <NftItem img={img10} number={456} price={1.3} />
                <NftItem img={img11} number={867} price={3.1} />
            </s.Row>
        </s.Section>
    );
};

export default Showcase;
