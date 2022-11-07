import React, { useRef } from 'react'
import { Swiper, SwiperSlide }  from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const images = [
   {image: 'https://res.cloudinary.com/daurieb51/image/upload/v1667147413/WhatsApp_Image_2022-10-25_at_17.14.13_qtapar.jpg',
},
   {image: 'https://res.cloudinary.com/daurieb51/image/upload/v1667147413/WhatsApp_Image_2022-10-25_at_15.50.40_pi84vi.jpg',
}
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
      <p className='pb-4 px-5 px-sm-0'>Show off your dogs on our <span className='text-dark font-weight-bold'>Posts</span> section📸</p>
      <Swiper modules = {[Navigation, EffectFade]}
         navigation
         effect
         speed={1200}
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

