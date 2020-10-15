import React from 'react';
import './OurWork.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const OurWorks = () => {


    return (

        <div style={{ marginTop: "100px", backgroundColor: 'black', paddingTop:50, paddingBottom:50 }}>
            <h2 className='text-center' style={{color:'white', paddingBottom:25}}>Here are some of  <span style={{color: "#7AB259"}}>our works</span></h2>
            <Swiper
                spaceBetween={80}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                Autoplay
            >
                <SwiperSlide><img src="https://i.ibb.co/r27dZP3/carousel-1.png" alt="carousel-1" border="0" style={{ height: "400px", width: "100%" }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/qWprYDz/carousel-2.png" alt="carousel-2" border="0" style={{ height: "400px", width: "100%" }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/Bz29Qhw/carousel-3.png" alt="carousel-3" border="0" style={{ height: "400px", width: "100%" }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/VB3QkzM/carousel-4.png" alt="carousel-4" border="0" style={{ height: "400px", width: "100%" }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/yQwdw2h/carousel-5.png" alt="carousel-5" border="0" style={{ height: "400px", width: "100%" }} /></SwiperSlide>
      ...
    </Swiper>

        </div>

    );
}

export default OurWorks;