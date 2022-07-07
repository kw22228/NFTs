import React from 'react';
import * as s from './Team.style';

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
import ReactConfetti from '../../ReactConfetti/ReactConfetti';
import { useWindowSize } from 'react-use';

const Member = ({ img, name = '', position = '' }) => {
    return (
        <s.Item>
            <s.ImgContainer>
                <img src={img} alt={name} />
            </s.ImgContainer>
            <s.Name>{name}</s.Name>
            <s.Position>{position}</s.Position>
        </s.Item>
    );
};

const Team = () => {
    const { width, height } = useWindowSize();
    console.log(height);

    return (
        <s.Section>
            <ReactConfetti />
            <s.Title>Team</s.Title>
            <s.Container>
                <Member img={img1} name="SKYBLAZE" position="founder" />
                <Member img={img2} name="MEGNUM" position="Co-founder" />
                <Member img={img3} name="MONKEY KING" position="Director" />
                <Member img={img4} name="BLACK PANTHER" position="Manager" />
                <Member img={img5} name="DEATHSTROKE" position="Artist" />
                <Member img={img6} name="LAZY KONG" position="Social media manager" />
                <Member img={img7} name="CYBER PUNK" position="Blockchain Specialist" />
                <Member img={img8} name="MONK" position="Web3 Developer" />
                <Member img={img9} name="BANANA" position="Graphic Designer" />
                <Member img={img10} name="APPLE" position="FrontEnd Developer" />
                <Member img={img11} name="PUPPLE" position="BackEnd Developer" />
            </s.Container>
        </s.Section>
    );
};

export default Team;
