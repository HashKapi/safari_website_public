import GalleryPhoto from "./GalleryPhoto";

import {Swiper, SwiperSlide} from 'swiper/react/swiper-react'

const Gallery = () => {
    return ( 
        <section className="gallery" id="gallery">
            <h1 className="heading">
                <span>g</span>
                <span>a</span>
                <span>l</span>
                <span>l</span>
                <span>e</span>
                <span>r</span>
                <span>y</span>
            </h1>

            <Swiper
                className='review-slider'
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                <SwiperSlide className="box">
                    <GalleryPhoto photoNum='1' />
                </SwiperSlide>
                <SwiperSlide className="box">
                    <GalleryPhoto photoNum='2' />
                </SwiperSlide>
                <SwiperSlide className="box">
                    <GalleryPhoto photoNum='3' />
                </SwiperSlide>
                <SwiperSlide className="box">
                    <GalleryPhoto photoNum='4' />
                </SwiperSlide>
                <SwiperSlide className="box">
                    <GalleryPhoto photoNum='5' />
                </SwiperSlide>
                <SwiperSlide className="box">
                    <GalleryPhoto photoNum='6' />
                </SwiperSlide>
            </Swiper>
        </section>
     );
}
 
export default Gallery;