import React from 'react'
import { Swiper, SwiperSlide }  from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../css_files/community_homepage.css'

const images = [
   {image: 'https://res.cloudinary.com/daurieb51/image/upload/v1659038540/africanbullystyles_frika_r1awjf.jpg',
},
   {image: 'https://res.cloudinary.com/daurieb51/image/upload/v1666646714/o4juyxmgery0cabfnsbg.jpg',
}
];

const imageStyling = {
   maxHeight : "100%",
   maxWidth : "100%",
   objectFit : "contain"
};

export default function newly_registered_preview() {
  return (
    <div className='container-fluid w-100'>
      <p className='pb-3 px-5 px-sm-0'>Take a look at the new dogs on the block🥳</p>
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
               <img src={images[1].image} className='img-fluid img-responsive'/>
            </SwiperSlide>
      </Swiper>
    </div>
  )
}
