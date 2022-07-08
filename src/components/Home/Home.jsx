import React from 'react';
import About from './About/About';
import RoadMap from './RoadMap/RoadMap';
import Showcase from './Showcase/Showcase';
import Team from './Team/Team';
import Faq from './Faq/Faq';
import TypeWriterText from '../TypeWriterText/TypeWriterText';
import Button from '../Button/Button';

import * as s from './Home.style';

import MP4 from '../../assets/Home Video.mp4';
import RoundTextBlack from '../../assets/Rounded-Text-Black.png';

const Home = () => {
    const typeTextArr = [
        //
        '<span class="text-1">NFTs.</span>',
        '<span class="text-2">Collectible Items.</span>',
        '<span class="text-3">Ape Killers!!</span>',
    ];
    return (
        <>
            <s.Section id="home">
                <s.Container>
                    <s.Box>
                        <s.Title>
                            Discover a new era of cool
                            <TypeWriterText typeTextArr={typeTextArr} />
                        </s.Title>
                        <s.SubTitle>Bored Of Apes? Try Something New.</s.SubTitle>
                        <s.ButtonContainer>
                            <Button text="Explore" link="#about" />
                        </s.ButtonContainer>
                    </s.Box>

                    <s.Box>
                        <s.VideoContainer>
                            <video src={MP4} type="video/mp4" autoPlay muted loop />
                        </s.VideoContainer>
                    </s.Box>

                    <s.Round>
                        <s.Circle>&#x2193;</s.Circle>
                        <img src={RoundTextBlack} alt="Scoll Down" />
                    </s.Round>
                </s.Container>
            </s.Section>
            <About />
            <RoadMap />
            <Showcase />
            <Team />
            <Faq />
        </>
    );
};

export default Home;
