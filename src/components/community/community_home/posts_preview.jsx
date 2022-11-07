import React, { useRef } from 'react'
import { Swiper, SwiperSlide }  from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const images = [
   {image : require('../images/bully1.jpg')},
   {image : require('../images/bully2.jpg')}
];

const imageStyling = {
   height : "100%",
   width : "100%",
   objectFit : "contain"
};

const ovrStyling = {
  width : "10%",
};


export default function posts_preview() {
  return (
   <div className='container-fluid'>
      <p className='pb-4'>Show off your dogs on our Posts section📸</p>
      <Swiper modules = {[Navigation, EffectFade]}
         navigation
         effect
         speed={800}
         slidesPerView = {1}
         loop
         autoplay
         className='myswiper w-100'>
            <SwiperSlide className='swiper-slide'>
               <img src={images[0].image} className='img-fluid img-responsive'/>
            </SwiperSlide>

            <SwiperSlide className='swiper-slide'>
               <img src={images[1].image} className='img-fluid img-responsive' />
            </SwiperSlide>
      </Swiper>
    </div>
  )
}

