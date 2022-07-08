import React from 'react';
import importAll from '../../../utils/importAll';
import Carousel from '../../Carousel/Carousel';
import * as s from './About.style';

import Button from '../../Button/Button';
import { ThemeProvider } from 'styled-components';

import { dark } from '../../../styles/Theme';

const About = () => {
    const images = importAll(require.context('../../../assets/Nfts/', false, /bighead-.*\.svg$/));

    return (
        <s.Section id="about">
            <s.Container>
                <s.Box>
                    <Carousel images={images} />
                </s.Box>
                <s.Box>
                    <s.Title>Welcome To The Weirdos Club.</s.Title>
                    <s.SubText>
                        The WEIRDOS CLUB is a private collection of NFTs—unique digital
                        collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum
                        blockchain and hosted on IPFS.
                    </s.SubText>
                    <s.SubTextLight>
                        With more than 200+ hand drawn traits, each NFT is unique and comes with a
                        membership to an exclusive group of successful investors. Join an ambitious
                        ever-growing community with multiple benefits and utilities.
                    </s.SubTextLight>

                    <s.ButtonContainer>
                        <ThemeProvider theme={dark}>
                            <Button
                                text="JOIN OUR SLACK"
                                link="https://app.slack.com/client/T03L89PJ54N/C03LW9MFSR2"
                            />
                        </ThemeProvider>
                    </s.ButtonContainer>
                </s.Box>
            </s.Container>
        </s.Section>
    );
};

export default About;
