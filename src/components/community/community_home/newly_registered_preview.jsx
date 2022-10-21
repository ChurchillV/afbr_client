import React from 'react'
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

export default function newly_registered_preview() {
  return (
    <div>
      <Swiper modules = {[Navigation, EffectFade]}
         navigation
         effect
         speed={800}
         slidesPerView = {1}
         loop
         autoplay
         className='myswiper'>
            <SwiperSlide className='swiper-slide'>
               <img src={images[0].image} style = {imageStyling}/>
            </SwiperSlide>

            <SwiperSlide className='swiper-slide'>
               <img src={images[1].image} style = {imageStyling}/>
            </SwiperSlide>

            <SwiperSlide className='swiper-slide'>
               <img src={images[0].image} style = {imageStyling}/>
            </SwiperSlide>

            <SwiperSlide className='swiper-slide'>
               <img src={images[1].image} style = {imageStyling}/>
            </SwiperSlide>

      </Swiper>
    </div>
  )
}
