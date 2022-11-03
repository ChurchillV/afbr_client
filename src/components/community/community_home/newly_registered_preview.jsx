import React from 'react'
import { Swiper, SwiperSlide }  from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../css_files/community_homepage.css'

const images = [
   {image : require('../images/bully1.jpg')},
   {image : require('../images/bully2.jpg')}
];

const imageStyling = {
   maxHeight : "100%",
   maxWidth : "100%",
   objectFit : "contain"
};

export default function newly_registered_preview() {
  return (
    <div>
      <h1>Take a look at the new dogs on the block🥳</h1>
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
      </Swiper>
    </div>
  )
}
