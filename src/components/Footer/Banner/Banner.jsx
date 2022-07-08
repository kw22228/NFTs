import React from 'react';
import * as s from './Banner.style';
import Button from '../../Button/Button';

import img1 from '../../../assets/Nfts/bighead-1.svg';
import img2 from '../../../assets/Nfts/bighead-2.svg';
import img3 from '../../../assets/Nfts/bighead-3.svg';
import img4 from '../../../assets/Nfts/bighead-4.svg';
import img5 from '../../../assets/Nfts/bighead-5.svg';
import img6 from '../../../assets/Nfts/bighead-6.svg';

const Banner = () => {
    return (
        <s.Section>
            <s.ImgContainer>
                <img src={img1} alt="Footer Banner" />
                <img src={img2} alt="Footer Banner" />
                <img src={img3} alt="Footer Banner" />
                <img src={img4} alt="Footer Banner" />
                <img src={img5} alt="Footer Banner" />
                <img src={img6} alt="Footer Banner" />
            </s.ImgContainer>
            <s.Title>
                Join the <br /> weirdos club
            </s.Title>
            <s.BtnContainer>
                <Button text="Join now" link="#" btnColor="light" />
            </s.BtnContainer>
        </s.Section>
    );
};

export default Banner;
