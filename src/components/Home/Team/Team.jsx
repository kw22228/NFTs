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

    return (
        <s.Section id="team">
            <ReactConfetti />
            <s.Title>Team</s.Title>
            <s.Container>
                <Member img={img1} name="RED" position="Founder" />
                <Member img={img2} name="ORANGE" position="Co-founder" />
                <Member img={img3} name="YELLOW" position="Director" />
                <Member img={img4} name="GREEN" position="Manager" />
                <Member img={img5} name="BLUE" position="Artist" />
                <Member img={img6} name="SKYBLUE" position="Social Media Manager" />
                <Member img={img7} name="BLACK" position="Blockchain Specialist" />
                <Member img={img8} name="PINK" position="Web3 Developer" />
                <Member img={img9} name="BANANA" position="Graphic Designer" />
                <Member img={img10} name="APPLE" position="FrontEnd Developer" />
                <Member img={img11} name="PUPPLE" position="BackEnd Developer" />
            </s.Container>
        </s.Section>
    );
};

export default Team;
