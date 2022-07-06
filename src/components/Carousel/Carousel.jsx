import React from 'react';
import * as s from './Carousel.style';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper';

const Carousel = ({ images }) => {
    return (
        <s.Container>
            {images && (
                <Swiper //
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        type: 'fraction',
                    }}
                    scrollbar={{
                        draggable: true,
                    }}
                    navigation={true}
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {images.map(image => (
                        <SwiperSlide key={image}>
                            <img src={image} alt="The Weridos" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </s.Container>
    );
};

export default Carousel;
